"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Read model",l={unversionedId:"architecture/read-model",id:"architecture/read-model",title:"Read model",description:"A read model contains the data of your application that is exposed to the client through the GraphQL API. It's a projection of one or more entities, so you dont have to directly expose them to the client. Booster generates the GraphQL queries that allow you to fetch your read models.",source:"@site/docs/03_architecture/06_read-model.mdx",sourceDirName:"03_architecture",slug:"/architecture/read-model",permalink:"/architecture/read-model",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/06_read-model.mdx",tags:[],version:"current",lastUpdatedBy:"Adri\xe1n Lorenzo",lastUpdatedAt:1678710791,formattedLastUpdatedAt:"Mar 13, 2023",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Entity",permalink:"/architecture/entity"},next:{title:"Notifications",permalink:"/architecture/notifications"}},d={},s=[{value:"Creating a read model",id:"creating-a-read-model",level:2},{value:"Declaring a read model",id:"declaring-a-read-model",level:2},{value:"The projection function",id:"the-projection-function",level:2},{value:"Projecting multiple entities",id:"projecting-multiple-entities",level:3},{value:"Advanced join keys",id:"advanced-join-keys",level:3},{value:"Array of entities",id:"array-of-entities",level:4},{value:"Returning special values",id:"returning-special-values",level:3},{value:"Deleting read models",id:"deleting-read-models",level:4},{value:"Keeping read models untouched",id:"keeping-read-models-untouched",level:4},{value:"Nested queries and calculated values using getters",id:"nested-queries-and-calculated-values-using-getters",level:2},{value:"Authorizing a read model",id:"authorizing-a-read-model",level:2},{value:"Querying a read model",id:"querying-a-read-model",level:2},{value:"Filtering a read model",id:"filtering-a-read-model",level:3},{value:"Subscribing to a read model",id:"subscribing-to-a-read-model",level:2},{value:"Sorting Read Models",id:"sorting-read-models",level:2},{value:"Querying time sequences",id:"querying-time-sequences",level:3},{value:"Read models naming convention",id:"read-models-naming-convention",level:2}],c={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"read-model"},"Read model"),(0,r.kt)("p",null,"A read model contains the data of your application that is exposed to the client through the GraphQL API. It's a ",(0,r.kt)("em",{parentName:"p"},"projection")," of one or more entities, so you dont have to directly expose them to the client. Booster generates the GraphQL queries that allow you to fetch your read models."),(0,r.kt)("p",null,"In other words, Read Models are cached data optimized for read operations. They're updated reactively when ",(0,r.kt)("a",{parentName:"p",href:"entity"},"Entities")," are updated after reducing ",(0,r.kt)("a",{parentName:"p",href:"event"},"events"),"."),(0,r.kt)("h2",{id:"creating-a-read-model"},"Creating a read model"),(0,r.kt)("p",null,"The Booster CLI will help you to create new read models. You just need to run the following command and the CLI will generate all the boilerplate for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'boost new:read-model CartReadModel --fields id:UUID cartItems:"Array<CartItem>" paid:boolean --projects Cart\n')),(0,r.kt)("p",null,"This will generate a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"cart-read-model.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/read-models")," directory. You can also create the file manually, but you will need to create the class and decorate it, so we recommend using the CLI."),(0,r.kt)("h2",{id:"declaring-a-read-model"},"Declaring a read model"),(0,r.kt)("p",null,"In Booster, a read model is a class decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ReadModel")," decorator. The properties of the class are the fields of the read model. The following example shows a read model with two fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class ReadModelName {\n  public constructor(readonly fieldA: SomeType, readonly fieldB: SomeType /* as many fields as needed */) {}\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadModelName")," class name will be used as the read model name in the GraphQL schema. Also, the types on the constructor will be used to generate the GraphQL schema. For example, if you have a property of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Array<CartItem>")," the GraphQL schema will know that is an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"CartItem")," objects.")),(0,r.kt)("h2",{id:"the-projection-function"},"The projection function"),(0,r.kt)("p",null,"The projection function is a static method decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Projects")," decorator. It is used to define how the read model is updated when an entity is modified. he projection function must return a new instance of the read model, it receives two arguments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity"),": The entity that has been modified"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current?"),": The current read model instance. If it's the first time the read model is created, this argument will be ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,r.kt)("p",null,"You must provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Projects")," decorator with an entity class and the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"join key")),". The join key is the name of the field in the entity that is used to match it with the read model's ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field. In the example below, we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cart")," entity to match it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"CartReadModel")," read model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class CartReadModel {\n  public constructor(readonly id: UUID, readonly cartItems: Array<CartItem>, readonly paid: boolean) {}\n\n  // highlight-start\n  @Projects(Cart, 'id')\n  public static projectCart(entity: Cart, currentCartReadModel?: CartReadModel): CartReadModel {\n    return new CartReadModel(entity.id, entity.cartItems, entity.paid)\n  }\n  // highlight-end\n}\n")),(0,r.kt)("h3",{id:"projecting-multiple-entities"},"Projecting multiple entities"),(0,r.kt)("p",null,"You are able to project multiple entities into the same read model. For example, you can have a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," that projects both the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," entity. In this case, the join key will be different for each entity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class UserReadModel {\n  public constructor(readonly username: string /* ...(other interesting fields from users)... */) {}\n\n  // highlight-next-line\n  @Projects(User, 'id')\n  public static projectUser(entity: User, current?: UserReadModel): ProjectionResult<UserReadModel> {\n    // Here we update the user fields\n  }\n\n  // highlight-next-line\n  @Projects(Post, 'ownerId')\n  public static projectUserPost(entity: Post, current?: UserReadModel): ProjectionResult<UserReadModel> {\n    //Here we can adapt the read model to show specific user information related with the Post entity\n  }\n}\n")),(0,r.kt)("h3",{id:"advanced-join-keys"},"Advanced join keys"),(0,r.kt)("p",null,"There might be cases where you need to project an entity into a read model using a more complex join key. For that reason, Booster supports other types of join keys."),(0,r.kt)("h4",{id:"array-of-entities"},"Array of entities"),(0,r.kt)("p",null,"You can use an array of entities as a join key. For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," entity with an array of users in that group (",(0,r.kt)("inlineCode",{parentName:"p"},"users: Array<UUID>"),"), you can have the following to update each ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Projects(Group, 'users')\n  public static projectUserGroup(entity: Group, readModelID: UUID, current?: UserReadModel): ProjectionResult<UserReadModel> {\n    //Here we can update the read models with group information\n    //This logic will be executed for each read model id in the array\n  }\n")),(0,r.kt)("p",null,"You can even select arrays of UUIDs as ",(0,r.kt)("inlineCode",{parentName:"p"},"joinKey"),". Booster get each value on the array, find a read model with that id and execute the projection function. The signature of the projection function is a bit different in this case. It receives the ",(0,r.kt)("inlineCode",{parentName:"p"},"readModelID")," as the second argument, which is the id we are projecting from the array. The third argument is the current read model instance, which will be ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," if it's the first time the read model is created. For example, if we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," with an array of users in that group (",(0,r.kt)("inlineCode",{parentName:"p"},"users: Array<UUID>"),"), we can have the following to update each ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," accordingly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"  @Projects(Group, 'users')\n  public static projectUserGroup(entity: Group, readModelID: UUID, current?: UserReadModel): ProjectionResult<UserReadModel> {\n    //Here we can update the read models with group information\n    //This logic will be executed for each read model id in the array\n  }\n")),(0,r.kt)("h3",{id:"returning-special-values"},"Returning special values"),(0,r.kt)("p",null,"Projections usually return a new instance of the read model. However, there are some special cases where you may want to return a different value."),(0,r.kt)("h4",{id:"deleting-read-models"},"Deleting read models"),(0,r.kt)("p",null,"One of the most common cases is when you want to delete a read model. For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," that projects the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity, you may want to delete the read model when the user is deleted. In this case you can return the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadModelAction.Delete")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class UserReadModel {\n  public constructor(readonly username: string, /* ...(other interesting fields from users)... */) {}\n\n  @Projects(User, 'id')\n  public static projectUser(entity: User, current?: UserReadModel): ProjectionResult<UserReadModel>  {\n    if (current?.deleted) {\n      return ReadModelAction.Delete\n    }\n    return new UserReadModel(...)\n  }\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a read model is a very expensive operation. It will trigger a write operation in the read model store. If you can, try to avoid deleting read models.")),(0,r.kt)("h4",{id:"keeping-read-models-untouched"},"Keeping read models untouched"),(0,r.kt)("p",null,"Another common case is when you want to keep the read model untouched. For example, if you have a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," that projects the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," entity, you may want to keep the read model untouched there are no releveant changes to your read model. In this case you can return the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadModelAction.Nothing")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class UserReadModel {\n  public constructor(readonly username: string, /* ...(other interesting fields from users)... */) {}\n\n  @Projects(User, 'id')\n  public static projectUser(entity: User, current?: UserReadModel): ProjectionResult<UserReadModel>  {\n    if (!current?.modified) {\n      return ReadModelAction.Nothing\n    }\n    return new UserReadModel(...)\n  }\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Keeping the read model untouched higly recommended in favour of returning a new instance of the read model with the same data. This will not only prevent a new write operation in the database, making your application more efficient. It will also prevent an unnecessary update to be dispatched to any GrahpQL clients subscribed to that read model.")),(0,r.kt)("h2",{id:"nested-queries-and-calculated-values-using-getters"},"Nested queries and calculated values using getters"),(0,r.kt)("p",null,"You can use TypeScript getters in your read models to allow nested queries and/or return calculated values. You can write arbitrary code in a getter, but you will tipically query for related read model objects or generate a value computed based on the current read model instance or context. This greatly improves the potential of customizing your read model responses."),(0,r.kt)("p",null,"Here's an example of a getter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel")," class that returns all ",(0,r.kt)("inlineCode",{parentName:"p"},"PostReadModel"),"s that belong to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"UserReadModel"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@ReadModel\nexport class UserReadModel {\n  public constructor(readonly id: UUID, readonly name: string, private postIds: UUID[]) {}\n\n  public get posts(): Promise<PostReadModel[]> {\n    return this.postIds.map((postId) => Booster.readModel(PostReadModel)\n      .filter({\n        id: { eq: postId }\n      })\n      .search()\n  }\n\n  @Projects(User, 'id')\n  public static projectUser(entity: User, current?: UserReadModel): ProjectionResult<UserReadModel>  {\n    return new UserReadModel(entity.id, entity.name, entity.postIds)\n  }\n}\n")),(0,r.kt)("p",null,"As you can see, the getter posts uses the Booster.readModel(PostReadModel) method and filters it by the ids of the posts saved in the postIds private property. This allows you to retrieve all the PostReadModels that belong to a specific UserReadModel and include them as part of the GraphQL response."),(0,r.kt)("p",null,"Also, you can see here a simple example of a getter called ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTime")," that returns the timestamp at the moment of the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"public get currentTime(): Date {\n  return new Date()\n}\n")),(0,r.kt)("p",null,"With the getters in place, your GraphQL API will start exposing the getters as regular fields and you will be able to transparently read them as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gql"},'query {\n  user(id: "123") {\n    id\n    name\n    currentTime\n    posts {\n      id\n      title\n      content\n    }\n  }\n}\n')),(0,r.kt)("p",null,"And here is an example of the corresponding JSON response when this query is executed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "user": {\n      "id": "123",\n      "name": "John Doe",\n      "currentTime": "2022-09-20T18:30:00.000Z",\n      "posts": [\n        {\n          "id": "1",\n          "title": "My first post",\n          "content": "This is the content of my first post"\n        },\n        {\n          "id": "2",\n          "title": "My second post",\n          "content": "This is the content of my second post"\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Notice that getters are not cached in the read models database, so the getters will be executed every time you include these fields in the queries. If access to nested queries is frequent or the size of the responses are big, you could improe your API response performance by querying the read models separately and joining the results in the client application."),(0,r.kt)("h2",{id:"authorizing-a-read-model"},"Authorizing a read model"),(0,r.kt)("p",null,"Read models are part of the public API of a Booster application, so you can define who is authorized to submit them. All read models are protected by default, which means that no one can query them. In order to allow users to query a read model, you must explicitly authorize them. You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize")," field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@ReadModel")," decorator to specify the authorization rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/read-model/product-read-model.ts"',title:'"src/read-model/product-read-model.ts"'},"@ReadModel({\n  authorize: 'all',\n})\nexport class ProductReadModel {\n  public constructor(public id: UUID, readonly name: string, readonly description: string, readonly price: number) {}\n\n  @Projects(Product, 'id')\n  public static projectProduct(entity: Product, current?: ProductReadModel): ProjectionResult<ProductReadModel> {\n    return new ProductReadModel(entity.id, entity.name, entity.description, entity.price)\n  }\n}\n")),(0,r.kt)("p",null,"You can read more about this on the ",(0,r.kt)("a",{parentName:"p",href:"/security/authorization"},"Authorization section"),"."),(0,r.kt)("h2",{id:"querying-a-read-model"},"Querying a read model"),(0,r.kt)("p",null,"Booster read models are accessible to the outside world through GraphQL queries. GrahpQL fits very well with Booster's CQRS approach because it has two kinds of reading operations: Queries and Subscriptions. They are read-only operations that do not modify the state of the application. Booster uses them to fetch data from the read models."),(0,r.kt)("p",null,"Booster automatically creates the queries and subscriptions for each read model. You can use them to fetch the data from the read models. For example, given the following read model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/read-model/cart-read-model.ts"',title:'"src/read-model/cart-read-model.ts"'},"@ReadModel({\n  authorize: 'all',\n})\nexport class CartReadModel {\n  public constructor(public id: UUID, readonly items: Array<CartItem>) {}\n\n  @Projects(Cart, 'id')\n  public static projectCart(entity: Cart, currentReadModel: CartReadModel): ProjectionResult<CartReadModel> {\n    return new CartReadModel(entity.id, entity.items)\n  }\n}\n")),(0,r.kt)("p",null,"You will get the following GraphQL query and subscriptions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query CartReadModel(id: ID!): CartReadModel\nsubscription CartReadModel(id: ID!): CartReadModel\nsubscription CartReadModels(id: UUIDPropertyFilter!): CartReadModel\n")),(0,r.kt)("p",null,"For more information about queries and how to use them, please check the ",(0,r.kt)("a",{parentName:"p",href:"/graphql"},"GraphQL API")," section."),(0,r.kt)("h3",{id:"filtering-a-read-model"},"Filtering a read model"),(0,r.kt)("p",null,"Booster GraphQL API provides support for filtering Read Models on ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptions"),". To get more information about it go to the ",(0,r.kt)("a",{parentName:"p",href:"/graphql#filtering-a-read-model"},"GraphQL API")," section."),(0,r.kt)("h2",{id:"subscribing-to-a-read-model"},"Subscribing to a read model"),(0,r.kt)("p",null,"Booster GraphQL API also provides support for real-time updates using subscriptions and a web-socket. To get more information about it go to the ",(0,r.kt)("a",{parentName:"p",href:"/graphql#subscribing-to-read-models"},"GraphQL API")," section."),(0,r.kt)("h2",{id:"sorting-read-models"},"Sorting Read Models"),(0,r.kt)("p",null,"There are some cases when it's desirable to query your read models sorted a particular field. An example could be a chat app where you want to fetch the messages of a channel sorted by the time they were sent. Booster provides a special decorator to tag a specific property as a sequence key for a read model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/read-model/message-read-model.ts"',title:'"src/read-model/message-read-model.ts"'},"export class MessageReadModel {\n  public constructor(\n    readonly id: UUID, // A channel ID\n    @sequencedBy readonly timestamp: string,\n    readonly contents: string\n  )\n\n  @Projects(Message, 'id')\n  public static projectMessage(\n    entity: Message,\n    currentReadModel: MessageReadModel\n  ): ProjectionResult<MessageReadModel> {\n    return new MessageReadModel(entity.id, entity.timestamp, entity.contents)\n  }\n}\n")),(0,r.kt)("h3",{id:"querying-time-sequences"},"Querying time sequences"),(0,r.kt)("p",null,"Adding a sequence key to a read model changes the behavior of the singular query, which now accepts the sequence key as an optional parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query MessageReadModel(id: ID!, timestamp: string): [MessageReadModel]\n")),(0,r.kt)("p",null,"Using this query, when only the id is provided, you get an array of all the messages in the channel sorted by timestamp in ascending order (from older to newer). When you also provide an specific timestamp, you still get an array, but it will only contain the message sent in that exact moment."),(0,r.kt)("p",null,"It is important to guarantee that the sequence key is unique for each message. This could be difficult to achieve if you are using a timestamp as the sequence key. Booster provides a utility function to generate unique timestamps that you can use in your read models: ",(0,r.kt)("inlineCode",{parentName:"p"},"TimeKey.generate()"),". It will generate a timestamp with a random UUID as a suffix to avoid any coincidences."),(0,r.kt)("p",null,"For more information about queries and how to use them, please check the ",(0,r.kt)("a",{parentName:"p",href:"/graphql#reading-read-models"},"GraphQL API")," section."),(0,r.kt)("h2",{id:"read-models-naming-convention"},"Read models naming convention"),(0,r.kt)("p",null,"As it has been previously commented, semantics plays an important role in designing a coherent system and your application should reflect your domain concepts, we recommend choosing a representative domain name and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadModel")," suffix in your read models name."),(0,r.kt)("p",null,"Despite you can place your read models in any directory, we strongly recommend you to put them in ",(0,r.kt)("inlineCode",{parentName:"p"},"<project-root>/src/read-models"),". Having all the read models in one place will help you to understand your application's capabilities at a glance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<project-root>\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 commands\n\u2502\xa0\xa0 \u251c\u2500\u2500 common\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 entities\n\u2502\xa0\xa0 \u251c\u2500\u2500 read-models  <------ put them here\n\u2502\xa0\xa0 \u251c\u2500\u2500 events\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 read-models\n")))}p.isMDXComponent=!0}}]);