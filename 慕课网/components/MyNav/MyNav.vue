<template>
	<view>
		<!-- h5 -->
		<view class="nav_h5" v-if="h5">
			<u-avatar :src="src"></u-avatar>
			<span class="title_h5">惊喜百货</span>
		</view>
		<!-- 小程序 -->
		<view class="wx" v-else>
			<view class="block"></view>
			<view class="nav">
				<u-avatar :src="src"></u-avatar>
				<span class="title">惊喜百货</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/2.jpg',
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content{
		background: #ececec;
		// height: 100vh;
		.nav_h5{
			padding: 2% 0 0 16rpx;
			display: flex;
			align-items: center;
			.title_h5{
				margin: 0 0 0 20rpx;
				font-weight: 600;
			}
		}
		.nav{
			height: var();
			padding:60rpx 0 0  20rpx;
			display: flex;
			align-items: center;
			.title{
				margin-left:20rpx;
				font-weight: bold;
			}
		}
	}

</style>
