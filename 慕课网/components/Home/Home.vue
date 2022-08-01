<template>
	<view>
		<view class="nav">
			<view>全部</view>
			<view>零基础</view>
			<view>进阶课</view>
		</view>
		<view class="wwat">
			<view class="litu" v-for="(item,index) in list" :key="index">
				<li>
					<img :src="item.img" alt="图片" class="www">
					<p>{{item.name}}</p>
					<p>{{item.prioe}}</p>
				</li>
			</view>
		</view>
	</view>
</template>

<script>
	import jiao from '@/components/jiaoc.vue'
	import ling from '@/components/ling.vue'
	import quan from '@/components/quanbu.vue'
	export default {
		name:"Home",
		data() {
			return {
				list:[
					{
					  name:"70人在这学习.新上好客",
					  img:"/img/1.png",
					  prioe:"限时优惠"
					},
					{
					  name:"70人在这学习.新上好客",
					  img:"/img/1.png",
					  prioe:"限时优惠"
					},
					{
					  name:"70人在这学习.新上好客",
					  img:"/img/1.png",
					  prioe:"限时优惠"
					},
					{
					  name:"70人在这学习.新上好客",
					  img:"/img/1.png",
					  prioe:"限时优惠"
					},
				],
					h5:true,
					list1:[{name:"全部"},{name:"零基础"},{name:"进阶课"}],
					arrs:["jiao","ling","quan",],
					iscomponent:"quan",
					quan:true,
					ling:false,
					jiao:false,
					index: 0
			};
		},
		components:{//组件
			jiao,
			ling,
			quan
		},
	}
</script>

<style lang="scss">
	.nav{
		display: flex;
		view{
			margin: 20rpx;
		}
	}
	.wwat{
		display: flex;
		width: 500rpx;
		flex-wrap: wrap;
		.litu{
			display: flex;
			width:200rpx;
			height:300rpx;
			margin-left: 20rpx;
			margin-bottom: 30rpx;
			border-color:1px solid antiquewhite;
			background: #ccc;
			li{
				list-style: none;
			}
		}
	}
	

</style>