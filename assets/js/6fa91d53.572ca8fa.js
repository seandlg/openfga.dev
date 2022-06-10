"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[9462],{97011:function(t,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),i=n(6737),s=n(65488),r=n(85162),p=["components"],u={title:"How to install the SDK",sidebar_position:2,slug:"/integration/install-sdk"},d="How to install the SDK",c={unversionedId:"content/integration/install-sdk",id:"content/integration/install-sdk",title:"How to install the SDK",description:"To get started, install the  SDK packages.",source:"@site/docs/content/integration/install-sdk.mdx",sourceDirName:"content/integration",slug:"/integration/install-sdk",permalink:"/integration/install-sdk",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/integration/install-sdk.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to install the SDK",sidebar_position:2,slug:"/integration/install-sdk"},sidebar:"docs",previous:{title:"Add Authorization to Your API",permalink:"/integration"},next:{title:"How to setup SDK client",permalink:"/integration/setup-sdk-client"}},k={},g=[{value:"Related Sections",id:"related-sections",level:2}],m={toc:g};function h(t){var e=t.components,n=(0,o.Z)(t,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-install-the-sdk"},"How to install the SDK"),(0,l.kt)(i.AH,{mdxType:"DocumentationNotice"}),(0,l.kt)("p",null,"To get started, install the ",(0,l.kt)(i.rZ,{format:i.v7.ShortForm,mdxType:"ProductName"})," SDK packages."),(0,l.kt)(s.Z,{groupId:"languages",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:i.eU.JS_SDK,label:i.UB.get(i.eU.JS_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"You can find find the Node.js package on npm at: ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@openfga/sdk"},"@openfga/sdk"),"."),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://npmjs.org"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @openfga/sdk\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://yarnpkg.com"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @openfga/sdk\n"))),(0,l.kt)(r.Z,{value:i.eU.GO_SDK,label:i.UB.get(i.eU.GO_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"You can find find the Go package on GitHub at: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/openfga/go-sdk"},"@openfga/go-sdk"),"."),(0,l.kt)("p",null,"To install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"go get -u github.com/openfga/go-sdk\n")),(0,l.kt)("p",null,"In your code, import the module and use it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  fgaSdk "github.com/openfga/go-sdk"\n)\n\nfunc Main() {\n    configuration, err := fgaSdk.NewConfiguration(fgaSdk.UserConfiguration{})\n}\n')),(0,l.kt)("p",null,"You can then run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"go mod tidy\n")),(0,l.kt)("p",null,"to update ",(0,l.kt)("inlineCode",{parentName:"p"},"go.mod")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"go.sum")," if you are using them.")),(0,l.kt)(r.Z,{value:i.eU.DOTNET_SDK,label:i.UB.get(i.eU.DOTNET_SDK),mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)(i.rZ,{format:i.v7.ShortForm,mdxType:"ProductName"})," .NET SDK is available on ",(0,l.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/OpenFGA.Sdk/"},"NuGet"),"."),(0,l.kt)("p",null,"You can install it using:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-dotnet-cli"},"dotnet CLI"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet add package OpenFGA.Sdk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-powershell"},"Package Manager Console")," inside Visual Studio:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Package OpenFGA.Sdk\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"Visual Studio"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough"},"Visual Studio for Mac")," and ",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/rider/Using_NuGet.html"},"IntelliJ Rider"))),(0,l.kt)("p",null,"Search for and install ",(0,l.kt)("inlineCode",{parentName:"p"},"OpenFGA.Sdk")," in each of their respective package manager UIs."))),(0,l.kt)("h2",{id:"related-sections"},"Related Sections"),(0,l.kt)(i.$q,{description:"Get {ProductName}'s SDKs to add authorization to your API.",relatedLinks:[{title:"{ProductName} Node.js SDK",description:"Install our Node.js & JavaScript SDK to get started.",link:"https://www.npmjs.com/package/@openfga/sdk"},{title:"{ProductName} Go SDK",description:"Use our Go SDK to easily connect your Go application to the {ProductName} API",link:"https://github.com/openfga/go-sdk"},{title:"{ProductName} .NET SDK",description:"Connect your .NET service with {ProductName} using our .NET SDK",link:"https://github.com/openfga/dotnet-sdk"}],mdxType:"RelatedSection"}))}h.isMDXComponent=!0}}]);