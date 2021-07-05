# irita.bianjie.ai
IRITA Product Website


### 部署

```
 npm run build
```
构建完的静态资源在docs/.vuepress/dist下

### 运营文章 Markdown 使用步骤, 提交方式及规则

#### 首次使用

1. fork github资源到自己的repository.
2. git clone 自己github的目录资源, 将项目克隆至本地.
3. checkout -b dev, 切换成dev分支: 需在Stage环境(目前该项目只有 Stage, Prod)验证没问题以后再切换成master.
4. 添加边界的repository为 git 的 remote: git remote add upstream xxx (xxx 为边界的该项目github资源地址).

#### 后续使用
后续使用不需要再次添加git配置信息, 只需按照如下步骤:

1. 确保在dev分支(git branch可查看当前分支), git pull, 一般情况下不会有冲突, 如有冲突请联系开发人员解决.
2. docs/ 目录下有article和blog两个文件夹, 分别存放文章和博客的 Markdown 文件, 运营人员根据需要将对应的文件放在所需目录下.
3. 按照使用规则写好文件及配置后(Markdown书写及配置规则详见下文), 将修改的文件提交至自己的github远程, 然后提交 `Pull Request`, 并请Repo管理人员 Merge code.
4. code merged以后大约10 min后可访问 `irita.stage.bianjie.ai ` 查看效果
5. 如Stage环境检查没问题, 将本地代码合并至 master 分支(git merge dev master), 然后将master分支提交自己的github远程, , 然后提交 `Pull Request`, 并请Repo管理人员 Merge code.
6. 请DevOps同事发布Prod.
7. 生产环境验证.

#### 配置规则

文章及博客的 Markdown 文件需按如下方式写 (目前已在相应的目录及配置文件中添加 Example 供参考, 如不再需要请自行删除或者联系开发人员删除)
```
::: slot blog-001
    冰灯是流行于中国北方的一种古老的民间艺术形式, 因为独特的地域优势...

:::

// 所有的文章开头和结尾都要包含在如上的12个点中, 第一行的6个点后面必须加上 slot, 后面跟上 blog-序号

```
写好文章以后需更新配置信息, 修改 docs/community.md

```
{
    layout: Layout,
    isCommunity: true,
    blogs: [
        {
            src: /img/blog/blog_save.png,  //该文章所需的配图, 需命名好, 放到 docs/.vuepress/public/img/ 目录下.
            title: "如何快速部署,不懂爱恨情仇煎熬的我们, 还以为殉情只是古老的传言, 相信那一天会低过永远",  //文章的标题.
            owner: "边界智能",  //文章所有者
            time: 2021/03/24,  //文章时间
            icon: /img/blog/bianjie_icon.png,  //文章所有者的icon
            router: /blog/blog-008,  // /blog/是固定信息, blog-008为刚才 Markdown 文件中的slot值
            slot: blog-008,  //blog-008为刚才 Markdown 文件中的slot值
        },
        {
            src: /img/blog/blog_save.png,
            title: 如何快速部署,
            owner: 边界智能,
            time: 2021/03/24,
            icon: /img/blog/bianjie_icon.png,
            router: /blog/blog-007,
            slot: blog-007,
        },
    ],
    articles:[
        {
            month: Mar,
            date: 27,
            year: 2021,
            title: "边界智能成为中国中小企业协会产业区块链专委会常务理事",
            content: 边界智能成为中国, 
            router: /article/article-001, //配置规则跟博客一致
            slot: article-001
        },
        {
            month: Mar,
            date: 27,
            year: 2021,
            title: 边界智能成为中国中小企业协会产业区块链专委会常务理事,
            content: 边界智能成为中国, 
            router: /article/article-002,
            slot: article-002
        },
    ]
}
```


