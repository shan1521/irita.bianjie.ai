<template>
    <div class="wenchang">
        <h1 class="page_title"> {{pageTitle}} </h1>
        <div class="first_caption">{{firstContent.text}}</div>
        <a class="first_link" :href="firstContent.link" target="_blank" rel="noreferrer noopener">{{firstContent.link}}</a>
        <div class="second_caption">{{secondContent.text}}</div>
        <div class="bsn_text">{{secondContent.bsnContent.text}}</div>
        <div class="bsn_title">{{secondContent.bsnContent.title}}：</div>
        <ul class="list">
            <li class="item" v-for="(item,index) in secondContent.bsnContent.list" :key="index">
                <span class="text"> {{item.text}}</span>：
                <a class="item_link" :href="item.link" target="_blank" rel="noreferrer noopener">{{item.link}}</a>
                <span v-if="item.tip" class="tip">{{item.tip}}</span>
            </li>
        </ul>
        <div class="irita_text">{{secondContent.iritaTestnet.text}}</div>
        <div class="irita_title">{{secondContent.iritaTestnet.title}}：</div>
        <div class="irita_wrap">
            <ul class="irita_block">
                <li class="irita_item" v-for="(irita,index) in secondContent.iritaTestnet.block" :key="index">{{irita.text}}</li>
            </ul>
            <div class="irita_lang">{{secondContent.iritaTestnet.lang}}</div>
        </div>
        <div class="third_caption">{{thirdContent.text}}</div>
        <div class="third_title">{{thirdContent.title}}：</div>
        <div class="third_desc">{{thirdContent.description}}</div>
        <div class="forth_caption">{{forthContent.text}}</div>
        <a class="forth_link" :href="forthContent.link" target="_blank" rel="noreferrer noopener">{{forthContent.link}}</a>
    </div>
</template>

<script>
export default {
    name: 'Wenchange',
    computed: {
        pageTitle() {
            return this.$frontmatter.pageTitle;
        },
        firstContent() {
            return this.$frontmatter.firstContent;
        },
        secondContent() {
            return this.$frontmatter.secondContent;
        },
        thirdContent() {
            return this.$frontmatter.thirdContent;
        },
        forthContent() {
            return this.$frontmatter.forthContent;
        },
    },
}
</script>

<style lang="stylus">
.wenchang {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 760px;
    height: 100%;
    font-size: 16px;
    color: #000;
    line-height: 24px;
    @media (max-width: 780px) {
        padding: 0 48px;
    }
    @media (max-width: 506px) {
        padding: 0 16px;
    }
    div {
        margin-top: 16px;
    }
    .first_caption {
        margin-top: 70px;
        font-weight: 600;
    }
    .first_link, .forth_link {
        display: block;
        margin-top: 16px;
    }
    .second_caption {
        margin-top: 48px;
        font-weight: 600;
    }
    .list {
        margin-top: 16px;
        .item {
            margin-top: 16px;
            list-style: inside;
        }
    }
    .irita_text {
        margin-top: 60px;
    }
    .irita_wrap {
        box-sizing: border-box;
        padding: 16px 8px;
        display: flex;
        justify-content: space-between;
        align-self: center;
        width: 100%;
        color: rgba(0,0,0,.85);
        background: #F6F5F5;
        border-radius: 4px;
        .irita_lang {
            align-self: flex-end;
            color: rgba(0,0,0,.65);
        }
    }
    .third_caption {
        font-weight: 600;
    }
    .forth_caption {
        margin-top: 60px;
        font-weight: 600;
    }
    .forth_link {
        padding-bottom: 150px;
    }
}
</style>