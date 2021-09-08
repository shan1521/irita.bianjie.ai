# <font size="6">文昌链开发配置文档</font>

<br>

## 一、SDK-GO地址：

[https://github.com/bianjieai/opb-sdk-go](https://github.com/bianjieai/opb-sdk-go)

## 二、开发环境

1、BSN

BSN 文昌链注册及账户创建的文档：

- 注册： [https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/helper/4-1.html)
- 链账户的创建： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-1.html) （注意托管账户和非托管账户的区别及使用）
- 项目的创建及接入参数的下载： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-2-2.html)
- 网关接入说明： [https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html](https://www.bsnbase.com/static/tmpFile/bzsc/openper/7-3-1.html)

2、IRITA测试网

初始化SKD配置：

```javascript
Chain-ID：testing
RPC：47.100.192.234:26657
gRPC：47.100.192.234:9090
```

## 三、链信息和区块、交易查询

文昌链区块链浏览器暂未开放，链信息、区块和交易查询可参照如下方式：

初始化 client 成功后，再调用 BaseClient 可以查询到。

## 四、NFT文档

[https://irita.bianjie.ai/docs/core_modules/nft.html](https://irita.bianjie.ai/docs/core_modules/nft.html)