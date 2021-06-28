<template>
    <div class="pagination">
        <!--当 当前页为第一页时;上一页按钮需要被禁用 disabled应该为true-->
        <button :disabled="currentPage<=1" @click="changePage(currentPage-1)">上一页</button>
        <!--当连续页码数的启始页大于1时 省略号才需要显示-->
        <button  v-if="startEnd.start>1" @click="changePage(1)">1</button>
        <!--当连续页码数的启始页大于2时 省略号才需要显示-->
        <button v-if="startEnd.start>2" disabled>···</button>

        <!--连续页码数-->
        <button v-for="item in pageNum" :key="item" :class="{active:item===currentPage}"
                v-if="item>=startEnd.start && item<=startEnd.end"
                @click="changePage(item)">{{item}}</button>


        <!--当连续页码数的结束始页小于pageNum-1时 省略号才需要显示-->
        <button v-if="startEnd.end<pageNum-1">···</button>
        <!--当连续页码数的结束始页小于pageNum时 pageNum才需要显示-->
        <button v-if="startEnd.end<pageNum" @click="changePage(pageNum)">{{pageNum}}</button>
        <!--当当前页为最后一页时;下一页按钮需要被禁用 disabled应该为true-->
        <button :disabled="currentPage>=pageNum" @click="changePage(currentPage+1)">下一页</button>

        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>

<script>
    // 如果抽象的是公共组件!! 切记要思考下列这些数据是内部(data)的还是外部的(props)!!
    /*涉及到的数据
        1. 总条数:total(外部数据)
        2. 每页显示多少条:pageSize(外部数据)
        3. 根据1&2派生出总页数:pageNum
        4. 当前页: currentPage(内部数据)
        5. 连续页码数: lxyms(外部数据)
        6. 根据4&5派生出 连续页码数的起始页&结束页 {start,end}
        7. 初始页:pageFromWrap(外部数据)
    */
    export default {
        name: "pagination",
        props:{
            total:{
                type:Number,
                default:0
            },
            pageSize:{
                type:Number,
                default:1
            },
            lxyms:{
                type:Number,
                default:3
            },
            pageFromWrap:{
                type:Number,
                default:1
            }
        },
        data(){
            return {
                currentPage:this.pageFromWrap
            }
        },
        computed:{
            pageNum(){
                return Math.ceil(this.total/this.pageSize)
            },
            startEnd(){
                //end和start 一定会满足的规律: end - start = lxyms -1
                //start = end - lxyms +1
                //end  = start + lxyms -1
                let start =0;
                let end = 0;
                //根据当前页&连续页码数派生
                let {currentPage,lxyms,pageNum} = this;

                //考虑的都是理想状态  当前页前后的页码是可以满足连续页码数的
                start = currentPage - Math.floor(lxyms/2)
                //连续页码数的启始页一定要大于等于1
                start < 1 ? start = 1 : ""
                //当start被确定后 end是可以根据start的值自动进行补位的
                end  = start + lxyms -1
                if(end > pageNum){
                    //连续页码数的结束页一定要小于等于总页数
                    //如果end不合法 end的值要被矫正 start要进行补位
                    end = pageNum;
                    //start要进行补位
                    start = end - lxyms +1
                    //代表end 和 start 都不合法
                    start < 1 ? start = 1 : ""
                }

                return {start,end}
            }
        },
        methods:{
            //改变当前页的事件的回调
            changePage(page){
                if(page<1) return;//当前页不能是负值
                if(page>this.pageNum) return;//当前页不能超过总页数
                if(page === this.currentPage) return;//跳转页等于当前页 则不做处理

                this.currentPage = page;

                //将currentPage暴露给外部逻辑
                this.$emit("changePage",this.currentPage)
            }
        },
        watch:{
            pageFromWrap:{
                handler(value){
                    this.currentPage = value
                },
                immediate:true,
                deep:true
            }
        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;
        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>