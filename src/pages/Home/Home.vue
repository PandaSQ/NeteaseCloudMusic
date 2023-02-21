<template>
		
		
					  <el-row :gutter="20" type="flex" align="middle">
						  
					    <el-col :span="8">
							<i class="el-icon-pear logo"></i>
							<span class="title">网易云音乐</span>
						</el-col>
						
					    <el-col :span="8">
							<i class="el-icon-arrow-left"></i>
							<i class="el-icon-arrow-right"></i>
							<el-input
								style="width: 15.625rem;border: 0px;"
								size="small"
							    placeholder="请输入内容"
							    prefix-icon="el-icon-search">
							</el-input>
						</el-col>
						
					    <el-col :span="8">
							
						<template v-if="isLogin">
							<el-avatar :size='30' ></el-avatar>
							<span class="login" icon="el-icon-user-solid" :src='user.data.profile.avatarUrl' @click="cancellation">注销</span>
						</template>
						<template v-else>
							<el-avatar :size='30' icon="el-icon-user-solid" ></el-avatar>
							<span  class="login" @click="open">登录</span>
						</template>
							
							
							<i class="el-icon-setting"></i>
							<i class="el-icon-message"></i>
						</el-col>
					  </el-row>
		
		
</template>

<script>
	
	import { MessageBox } from 'element-ui';
	
	import {generatQRAPI,generateKeyAPI,checkQRAPI,getLoginStatusAPI,logoutAPI} from '@/api/index.js'
	
	export default {
		name:'Home',
		data() {
			return {
				QRKey: 1,
				QRState:{},
				user:{
				},
				isLogin:false,
			}
		},
		methods: {
			
			//弹出二维码,并登录
		      async open() {
				  
				  //生成二维码密匙
				  const key = await generateKeyAPI({timerstamp:Date.now()})
				  const QRKey = key.data.data.unikey
				  console.log('key',QRKey)
				  this.QRKey = QRKey
				  //生成二维码
				  const QR = await generatQRAPI({key:QRKey,qrimg:true,timerstamp:Date.now()})
				  console.log('二维码',QR)
				  
				  
		        MessageBox.alert('<img src = '+  QR.data.data.qrimg +' /><br/><div>'+this.QRState.message+' </div>', '扫码登录', {
		          dangerouslyUseHTMLString: true,	//以HTML显示
				  center:true,	//居中显示
				  showConfirmButton:false	//确定按钮是否显示
		        });
				
				
				
				let timer = setInterval(async ()=> {
					
					//检测二维码状态  800 为二维码过期,801 为等待扫码,802 为待确认,803 为授权登录成功(803 状态码下会返回 cookies)
					 let QRState = await checkQRAPI({key:QRKey,qrimg:true,timerstamp:Date.now()})
					 this.QRState = QRState.data
					console.log('状态',this.QRState.code)
					if(this.QRState.code === 800){
						clearInterval(timer)
						console.log('二维码已过期')
						alert('二维码已过期,请重新获取')
					}
					if(this.QRState.code === 803) {
					alert('您已成功登录')
					clearInterval(timer)
					const user = await getLoginStatusAPI({timerstamp:Date.now()})
					console.log('你已成功登录',user)
					this.user = user.data
					this.isLogin = true
					}
				},2000)
				
		      },
			  
			  //退出登录
			  async cancellation() {
				  this.isLogin = false
				  const user = await logoutAPI({timerstamp:Date.now()})
				  this.user = user
				  console.log('注销',user)
			  }
		},
		
		async mounted() {
			const user = await getLoginStatusAPI({timerstamp:Date.now()})
			this.user = user
			console.log('用户',user)
		}
		
	}
</script>

<style scoped="scoped">
	.logo {
		font-size: 30px;
		color: #fff;
	}
	.title {
		color: #fff;
		font-size: 20px;
		font-family: "PingFang SC";
		position: absolute;
		bottom:5px;
	}
	.el-avatar {
		border-radius: 100px;
		margin-right: 10px;
		position: relative;
		top: 10px;
	}
	.login {
		color: #FAD5D5;
		font-family: "PingFang SC";
	}
	.login:hover {
		color: #FFF;
	}
	.a {
		width: 200px;
		height: 200px;
		background-color: #000000;
		position: absolute;
		top: 100px;
	}
</style>
