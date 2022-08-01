<template>
	<view class="content">
		<view class="box">
			<img src="" alt="图片"> <view class="l1"> 慕课网</view>  <view class="l2"><span>下载app|登录</span></view>
		</view>
		<view class="tab">
			<u-tabs :list="list1" @click="click" class="w" :scrollable="false"></u-tabs>
		</view>
		<view class="view">
			<Home v-if="index===0"></Home>
			<News v-if="index===1"></News>
			<Count v-if="index===2"></Count>
			<Price v-if="index===3"></Price>
			<Shouji v-if="index===4"></Shouji>
			<Zhibo v-if="index===5"></Zhibo>
		</view>
	</view>
</template>

<script>
	import Home from "@/components/Home/Home.vue";
	import News from "@/components/News/News.vue";
	import Price from "@/components/Price/Price.vue";
	import Count from "@/components/Count/Count.vue";
	import Shouji from "@/components/shouji/shouji.vue";
	import Zhibo from "@/components/zhibket/zhibket.vue";
	export default {
		data() {
			return {
				h5:true,
				
				list1:[{name:"首页"},{name:"免费课"},{name:"实战课"},{name:"体系课"},{name:"专栏"},{name:"手记"},{name:"直播课堂"}],
				arrs:["Home","News","Count","Price","Shouji","Zhibo"],
				iscomponent:"Home",
				home:true,
				news:false,
				count:false,
				index: 0
			}
		},
		components:{//组件
			Home,
			News,
			Count,
			Price,
			Shouji,
			Zhibo
		},
		onLoad() {
			//#ifdef H5
			this.h5 = true;
			//#endif
			//#ifndef H5
			this.h5 = false;
			//#endif
		},
		methods: {
			click(item){
				this.index = item.index;
			}
		}
	}
</script>

<style lang="scss">
		.box{
			display: flex;
			color: RED;
			img{
				margin-left: 20rpx;
				}
			.l1{
				font-size: 40rpx;
				font-weight: bold;
			}
			.l2{
				margin-left: 180rpx;
				width: 200rpx;
				height: 20rpx;
				border-color:1rpx sliod red;
			}
			
		}
</style>
