# IRITA HUB 的跨链实践与应用
<div class="article_about">
    <div class="article_about_owner_container">
        <div class="article_about_icon_wrap">
            <img src='https://irita.bianjie.ai/img/blog/bianjie_icon.png' class="article_about_icon">
        </div>
        <span class="article_about_owner">边界智能</span>
    </div>
    <span class='article_about_time'>2021-04-03</span>
</div>

---
<br>

<font COLOR ="#949494"> *6 月 8 日，超级账本全球论坛 Hyperledger Global Forum 2021（HGF）盛大开幕，边界智能与日本开源伙伴团队 Datachain 围绕「IRITA 与 Fabric-IBC、Besu-IBC 结合 —— 为企业级区块链引入互操作性」话题进行了联合演讲。*</font>

<hr>

除边界智能外，参与第三届超级账本全球论坛还有中国信通院工物所、ConSenSys APAC、 超级账本中国技术工作组、红枣科技、三星、日立、富士通、IBM、Oracle、沃尔玛、埃森哲、Intel、H3C 等全球知名的企业及研究机构等。
 
论坛开幕首日，边界智能研究总监胡智威与 Datachain 资深区块链解决方案架构师 Ryo Sato 进行了线上主题演讲，**介绍了 IBC 及其架构、基于 IBC + iService 的 IRITA HUB 在企业级区块链中的应用和包括跨链 NFT 在内的探索实践，Fabric-IBC、Besu-IBC 实现以及 Hyperledger Labs 的跨链项目 YUI。**

##  <center> <font color=#00BFFF>跨链通信协议 IBC</font> </center>

#### <center> 异构跨链互联互通 </center>

谈及 IBC，胡智威解释道，IBC 全称为 Inter-Blockchain Communication，即跨链通信协议，由全球前沿的跨链项目 Cosmos 提出。正是由于采用了 IBC 协议，Cosmos 从跨链领域众多项目中脱颖而出。<font color=#00BFFF>**IBC 采用了自下而上的、类似于 TCP/IP 协议的设计，独立安全，简洁灵活。**</font>
 
值得注意的是，IBC 不假设区块链网络的拓扑，<font color=#00BFFF>**不仅能够实现同构链间的通信，还能支持异构区块链（公链和联盟链）间的跨链互联互通。**</font>因此，在目前的 Cosmos 生态中，已经产生了不涉及 Cosmos Hub 的网络跨链连接，所形成的并非是射线状的区块链网络，而是任意拓扑网络。

<br>

<div  align=center><img src="https://www.bianjie.ai/resources/IRITA/IRITA-HOME-Map/blog0/iritahub01.png" ></div>
<br>

## <center> <font color=#00BFFF>跨链服务枢纽 IRITA HUB </font></center>

#### <center> IBC + iService 在企业级区块链的应用</center>

IBC 跨链通信协议能够支持异构系统间的跨链，胡智威认为，由边界智能团队打造的 IRITA HUB 和由 Datachain 打造的 YUI 正是能很好证明这一能力特性的实例。
 
IRITA 是由边界智能团队自主研发的安全可控的开源联盟链产品，支持构建下一代分布式商业系统。

可访问开源地址：[https://github.com/bianjieai/irita](https://github.com/bianjieai/irita/)

IRITA HUB 是 IRITA 联盟链产品线中专注于跨链服务的产品，原生集成了 IBC 模块，并具有优越的跨异构系统服务交互能力（iService）、保护隐私的数据加密共享、高效的共识协议以及大数据技术支撑等核心技术优势。
 
谈及 iService，胡智威进一步解释道，<font color=#00BFFF>**跨链服务 iService 与跨链通信协议 IBC 结合，能够形成区块链互联网的 TCP/IP + HTTP 协议，为企业级区块链引入互操作性。**</font>具体而言，在应用层，iService 为分布式应用提供面向服务的交互协议；在传输层，IBC 支持数据包在多个不同的区块链网络之间可信交换以转移数据和状态信息。
 
IRITA HUB 原生具备了 iService + IBC 框架，因此，既可以跨链连接已经集成了 IBC 模块的区块链（包括公有链与联盟链），同时，通过基于边界智能的 Relayer 定制改造的「Smart Relayer」，还能实现尚未具备 IBC 功能的区块链之间的互联互通。

<br>

<div  align=center><img src="https://www.bianjie.ai/resources/IRITA/IRITA-HOME-Map/blog0/iritahub02.png" ></div>
<br>

在 2020 年 10 月，IRITA HUB 已作为跨链服务枢纽在 BSN 环境中集成部署，目前，许多企业级应用已经在 BSN 网络中上线运行。

未来，<font COLOR ="#00BFFF">**边界智能还计划将基于 IRITA HUB 支持 NFT 跨链转移。**</font>

<br>

<div  align=center><img src="https://www.bianjie.ai/resources/IRITA/IRITA-HOME-Map/blog0/iritahub03.png" ></div>
<br>

## <center> <font color=#00BFFF>超级账本跨链项目 YUI </font> </center>

#### <center> Hyperledger 中的 IBC 实现 </center>

YUI 是由 Datachain 团队开发打造、边界智能团队参与贡献的一个超级账本实验室（Hyperledger Lab）项目，旨在实现多种异构账本间的互操作性。

<font COLOR ="#949494"> *https://labs.hyperledger.org/labs/yui.html*</font>

<font COLOR ="#949494"> *https://github.com/hyperledger-labs/yui-docs/blob/main/CONTRIBUTORS.md*</font>

Datachain 团队的 Ryo 介绍了 Fabric-IBC 和 Besu-IBC，即 IBC 协议在 Hyperledger 中的实现。其中，YUI 主要基于 IBC 协议设计实现跨链通信，并在此基础上加以扩展使其可以支持多样化的 Hyperledger 项目。

同时，YUI 还为跨链通信提供模块与中间件，为跨链应用开发提供模块和工作，包括跨链环境浏览器等。

<br>

<div  align=center><img src="https://www.bianjie.ai/resources/IRITA/IRITA-HOME-Map/blog0/iritahub04.png" ></div>

