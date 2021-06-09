<template>
    <div class="expect_container_content change_expect_bg_color">
		<div class="expect_content_wrap">
			<div class="expect_logo_content">
				<router-link :to="`/home`">
					<img src="../assets/home/bianjie_logo.png" alt="">
				</router-link>
			</div>
			<div class="expect_content_menu">
				<ul class="expect_menu_list">
					<li class="expect_menu_list_item active_color">
						<router-link class="expect_menu_list_item_link" to="/products/iritaexpect">IRITA</router-link>
						<span>IRITA</span>
						<div class="active_block"></div>
					</li>
				</ul>
                <div class="print_content">
                    <div class="about_me_content">关注我们
                        <div class="qr_content">
                            <img src="../assets/home/qr_bianjie.png" alt="">
                        </div>
                    </div>
                   <span @click="openPrint()">打印 <img style="width: 0.14rem" src="../assets/home/print_icon.png"></span>
                </div>
				<div class="mobile_menu_content" @click="showMobileMenu()">
					<img src="../assets/home/mobile_menu.png" alt="">
				</div>
			</div>
		</div>
		<div class="expect_mobile_content" v-if="flShowMobileMenu">
			<ul class="expect_mobile_list_content">
				<li class="expect_mobile_list_button" @click="changeRouter(`/products/iritaexpect`)"><router-link :to="`/products/iritaexpect`">IRITA</router-link></li>
			</ul>
		</div>
        <div class="expect_img_wrap">
            <div class="expect_comming_soon">
                <div class="comming_soon_wrap">
                    <img class="comming_soon_img" src="../assets/irita/coming_soon.png">
                </div>
                <p class="comming_soon_desc">敬请期待...</p>
            </div>
        </div>
            <div class="qr_content">
                <div class="qr_content_wrap">
                    <h1>关注与联系</h1>
                    <div class="qr_img_content">
                        <img src="../assets/home/qr_bianjie.png" alt="">
                    </div>
                </div>
            </div>
	</div>
</template>

<script>
export default {
    name:"Expect",
    // data(){
    //     return{
    //         isActive:true
    //     }
    // },
    mounted(){
        this.$store.commit('flShowexpectAndFooter',true)
    }
}
</script>

<style scoped lang="less">
	@import "../style/convert";
        @media print {
        .expect_container_content{
            display: none;
        }
    }
.change_expect_bg_color{
	background: #002C78;
}
.expect_container_content{
	width: 100%;
    height: 0.8rem;
	z-index: 999;
	.expect_content_wrap{
		max-width: 12rem;
		margin: 0 auto;
		display: flex;
		align-items: center;
		.expect_logo_content{
			padding: 0.25rem 0 0.22rem 0;
			margin-right: 1.15rem;
			img{
				height: 0.3rem;
			}
		}
		.expect_content_menu{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .print_content{
                display: flex;
                color: #fff;
                margin-right: 0.2rem;
	            .download_style{
		            color: #fff;
	            }
                .about_me_content{
                    margin-right: 0.4rem;
                    position: relative;
                    .qr_content{
                        position: absolute;
                        top: 0.3rem;
                        right: -0.35rem;
                        display: none;
                        img{
                            width: 1.3rem;
                            height: 1.3rem;
                            border-radius: 0.04rem;
                        }
                    }
                    &:hover{
                        .qr_content{
                            display: block;
                        }
                    }
                }
				span{
					cursor: pointer;
				}
            }
			.mobile_menu_content{
				display: none;
			}
			.expect_menu_list{
				display: flex;
				list-style: none;
				.expect_menu_list_item{
					height: 0.77rem;
					padding: 0 0.15rem;
					font-size: 0.16rem;
					line-height: 0.77rem;
					position: relative;
					cursor: pointer;
					// .expect_menu_list_item_link{
					// 	display:block;
					// 	height:100%;
					// 	width:100%;
					// }
					a{
						display:block;
						height:100%;
						width:100%;
						color: rgba(255,255,255,0.5);
						&:hover{
							color: rgba(255,255,255,1);
						}
					}
					span{
						color: rgba(255,255,255,0.5);
						&:hover{
							color: rgba(255,255,255,1);
						}
					}
					.active_block{
						height: 0.02rem;
						background: #fff;
					}
				}
				.active_color{
					a{
						color: rgba(255,255,255,1);
					}
				}
			}
		}
	}
	.expect_mobile_content{
		display: none;
		outline-color: transparent;
	}
    .expect_img_wrap{
        flex: 1;
        margin: auto;
        width: 12rem;
        // height: 2.9rem;
        .expect_comming_soon{
            width: 3.14rem;
            margin: 0.6rem auto 0;
            .comming_soon_wrap{
                width: 100%;
                height: 2.1rem;
                .comming_soon_img{
                    display: inline-block;
                    width: 3.14rem;
                    height: 2.1rem;
                }
            }
            .comming_soon_desc{
                margin-top: 0.6rem;
                width: 1.12rem;
                height: 0.2rem;
                line-height: 0.2rem;
                font-size: 0.18rem;
            }
        }
    }
    .qr_content{
        margin-top: 1rem;
        width: 100%;
        .qr_content_wrap{
            max-width: 12rem;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 1rem;
            h1{
                text-align: center;
                margin-bottom: 0.2rem;
                font-size: 0.18rem;
            }
            .qr_img_content{
                width: 1.38rem;
                margin: 0 auto;
                img{
                    width: 100%;
                }
            }
        }
    }
	@media screen and (max-width: 790px){
		.home_copy_right_content_wrap{
			.home_copy_right_content{
				margin-top: 0.1rem;
				flex-direction: column;
			}
		}
	}
}
    @media screen and (max-width: 960px){
       .expect_container_content{
           .expect_content_wrap{
               .expect_content_menu{
                   .print_content{
                       display: none;
                   }
               }
           }
       }
    }
	@media screen and (max-width: 768px) {
		.expect_container_content{
			background: #002C78;
			.expect_content_wrap{
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 0 0.2rem;
				.expect_content_menu{
                    justify-content: flex-end;
					.expect_menu_list{
						display: none;
					}
					.mobile_menu_content{
						width: 0.3rem;
						height:0.3rem;
						display: flex;
						justify-content: center;
						align-items: center;
						img{
							width: 100%;
						}
					}
				}
			}
			.expect_mobile_content{
				display: block;
				.expect_mobile_list_content{
					cursor: pointer;
					list-style: none;
					box-sizing: border-box;
					text-align: center;
					/*  .expect_mobile_list_button{
						position: relative;
						//隐藏溢出的径向渐变背景
						overflow: hidden;
					}
					.expect_mobile_list_button:after{
						content: "";
						display: block;
						position: absolute;
						width: 100%;
						height: 100%;
						top: 0;
						left: 0;
						pointer-events: none;
						//设置径向渐变
						background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
						background-repeat: no-repeat;
						background-position: 50%;
						transform: scale(10, 10);
						opacity: 0;
						transition: transform .3s, opacity .4s;
						
					}
					.expect_mobile_list_button:active:after {
						transform: scale(0, 0);
						opacity: .3;
						//设置初始状态
						transition: 0s;
					}*/
					li{
						margin: 0.05rem 0;
						color: #fff;
						a{
							color: #fff;
						}
					}
				}
			}
		}
	}
    // @media print {
	// 	.expect_container_content{
	// 		background: #fff !important;
	// 		.qr_content{
	// 			margin-top:~`convertPxToCm('20px')` !important;
	// 			.qr_content_wrap{
	// 				margin-bottom: 0 !important;
	// 			}
	// 		}
	// 	}
	// }
	// .expect_content_container{
    //     position: fixed;
    //     top: 0;
    //     width: 100%;
    //     height: 0.8rem;
    //     z-index: 999;
    //     background: #002C78;
    //     .expect_content_wrap{
    //         max-width: 10rem;
    //         margin: 0 auto;
    //         display: flex;
    //         align-items: center;
    //         height: 100%;
    //         .expect_logo_content{
    //             padding: 0.25rem 0 0.25rem 0;
    //             margin-right: 1.15rem;
    //             img{
    //                 height: 0.3rem;
    //             }
    //         }
    //         .expect_content_menu{
    //             flex: 1;
    //             display: flex;
    //             justify-content: space-between;
    //             margin-left: 0.2rem;
    //             height: 0.08rem;
    //             color: #fff;
    //             text-align: center;
    //             background: red;
                
    //             .expect_menu_list{
    //                 position: relative;
    //                 width: 0.64rem;
    //                 height: 100%;
    //                 a{
    //                     display: inline-block;
    //                     width: 0.41rem;
    //                     height: 0.22rem;
    //                     font-size: 0.16rem;
    //                     color: #fff;
    //                     &:hover{
    //                         color: #0054E3;
    //                     }
    //                 }
    //                 .active_block{
    //                     position: absolute;
    //                     bottom: 0;
    //                     width: 0.64rem;
	// 					height: 0.03rem;
	// 					background: #fff;
	// 				}
    //             }
    //         }
    //     }
		
	// }
	// @media screen and (max-width: 1200px){
	// 	.expect_container_content{
			
	// 	}
	// }
	// @media screen  and (max-width: 768px){
	// 	.expect_container_content{
			
	// 	}
	// }
	// @media screen and (max-width: 375px){
	// 	.expect_container_content{
			
	// 	}
	// }
</style>