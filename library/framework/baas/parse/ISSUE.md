## Parse.Schema 和 ParseObject 有什么区别？

Parse.Schema 和 Parse.Object 是 Parse JavaScript SDK 中的两个不同类，它们具有不同的用途和功能：

Parse.Schema：Parse.Schema 用于定义、修改和管理数据库中的类（表）的 schema。您可以使用它来创建新类、删除已有类、更改类的字段以及设置 Class Level Permissions 等。简而言之，Parse.Schema 主要关注类本身及其结构。

示例：创建一个名为 'MyClass' 的新类并添加两个字段。

```javascript
const MyClassSchema = new Parse.Schema('MyClass');

MyClassSchema.addField('field1', 'string');
MyClassSchema.addField('field2', 'number');

await MyClassSchema.save({ useMasterKey: true });
```

Parse.Object：Parse.Object 是 Parse 中用于在类（表）中存储数据的基础对象。您需要实例化一个特定类的对象并操作其属性来保存、查询或更新数据行。简而言之，Parse.Object 关注数据操作，如 CRUD（创建、读取、更新和删除）操作。

示例：创建一个名为 'MyClass' 的新对象并设置两个属性。

```javascript
const MyClass = Parse.Object.extend('MyClass');
const myObject = new MyClass();

myObject.set('field1', 'Hello');
myObject.set('field2', 42);

await myObject.save();
```

总结一下，Parse.Schema 用于操作类的结构和设置，而 Parse.Object 用于执行数据操作。在实际应用中，您可能会同时使用这两个类以确保有效地处理数据和类结构。

## 新建 Parse.Object  的时候是否需要先创建 Parse.Schema

在使用 Parse SDK 时，您不需要先创建 Parse.Schema 来新建一个 Parse.Object。实际上，在创建并保存一个新的 Parse.Object 时，如果数据库中不存在相应的类（表），Parse Server 会自动创建一个。

示例：创建并保存名为 'MyClass' 的新对象。

```js
const MyClass = Parse.Object.extend('MyClass');
const myObject = new MyClass();

myObject.set('field1', 'Hello');
myObject.set('field2', 42);

await myObject.save();
```

在这个例子中，即使我们没有明确创建一个名为 'MyClass' 的 Parse.Schema，当我们创建并保存一个 MyClass 对象时，Parse 仍会在数据库中创建一个相应的类（表）。

尽管如此，在某些情况下，您可能希望预先定义 schema，主要有以下原因：

设置字段类型和约束：通过使用 Parse.Schema，您可以显式地指定字段的类型、是否必需以及其他一些限制。
设置 Class Level Permissions：Parse.Schema 允许您设置针对每个 class 的访问权限，从而提高数据安全性。
总之，虽然在创建 Parse.Object 时不需要预先创建 Parse.Schema，但在某些场景中，为了更好地控制数据结构和权限，您可能希望首先定义 schema。

## parser server 同一个 express 里要怎么使用 parse js sdk

```js
const express = require('express');
const bodyParser = require('body-parser');
const { ParseServer } = require('parse-server');
const Parse = require('parse/node');

// 配置 Parse 服务器
const parseServer = new ParseServer({
  databaseURI: "mongodb://your-mongodb-uri",
  appId: "YOUR_APP_ID",
  masterKey: "YOUR_MASTER_KEY",
  serverURL: "http://localhost:3000/parse"
});

// 初始化 Parse JS SDK
Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = 'http://localhost:3000/parse';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 挂载 Parse 服务器
app.use('/parse', parseServer.app);

// ---

app.post('/createObject', async (req, res) => {
  try {
    const MyClass = Parse.Object.extend('MyClass');
    const myObject = new MyClass();

    myObject.set('property', req.body.propertyValue);

    await myObject.save(null, { useMasterKey: true });
    res.status(200).json({ success: true, message: 'Object created' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});
```

### parse/node 设置 serverURL 是否意味着在服务端调用 JS SDK 时也需要走一次 HTTP 请求

是的，当您在服务端使用 Parse JavaScript SDK 时，配置 serverURL 意味着 SDK 将通过 HTTP 请求与 Parse Server 交互，即使它们位于同一台服务器上。这些请求可能会导致额外的开销和延迟。

在某些情况下，为了避免这种开销，您可以选择直接使用 Parse Server 的内部方法或 API，而不是通过 HTTP 请求。但是，请注意，这可能会让代码更加复杂，且需要深入了解 Parse Server 的实现细节。

总之，在大多数情况下，虽然在服务端使用 JavaScript SDK 会引入额外的 HTTP 请求，但这通常不会成为一个严重的问题。只有在性能和延迟问题特别严重时，才需要考虑优化这方面的开销。在这种情况下，您可能需要研究其他方法，如直接使用 Parse Server 内部方法或根据您的需求定制实现。

### masterKey 的作用？

masterKey 是 Parse Server 提供的一种特殊密钥，用于执行需要更高权限的操作。在某些情况下，您可能需要绕过正常的访问控制规则，例如 Class Level Permissions（类级别权限）和 ACL（访问控制列表），以执行敏感操作或管理任务。这时，masterKey 就派上了用场。

以下是 masterKey 的一些主要用途：

绕过 Class Level Permissions：当使用 masterKey 时，可以忽略为 class 设置的任何访问限制。
绕过 ACL：masterKey 允许您读取和修改受到 ACL 限制的对象，即使它们不属于当前用户。
执行敏感操作：某些敏感操作（例如删除用户、修改其他用户的密码等）需要使用 masterKey 来执行。
使用 masterKey 时，请注意以下注意事项：

最好仅在服务器端代码中使用 masterKey，而不要在客户端代码中使用它，以防止非法访问或操纵您的数据。
确保 masterKey 保密且难以猜测，以减少安全风险。
谨慎使用 masterKey，避免不必要的风险或误操作。
要在操作中使用 masterKey，您只需将其作为选项传递给相应的函数，如下所示：

```javascript
await myObject.save(null, { useMasterKey: true });
```

请确保仅在确实需要绕过访问控制或执行特殊操作时使用 masterKey。在其他情况下，请坚持使用默认的访问控制机制。

### 如何禁止客户端 JSSDK 创建类

???

### parse serve class level permission 是怎么设置的

在 Parse Server 中，通过设置类级别权限（Class Level Permissions, CLP），您可以限制对特定 class 的访问和修改操作。CLP 允许针对每个 class 设置 create、read、update 和 delete 权限。

以下是如何在 Parse Server 中设置 Class Level Permissions 的步骤：

创建一个新的 class：首先，需要创建一个自定义的 class。

```javascript
const MyClass = Parse.Object.extend('MyClass');
```

设置 Class Level Permissions：设置一个 JSON 格式的对象，包含您想要限制的权限。例如，在这里我们禁止所有公共读写操作，并允许特定角色（如管理员）进行读操作。

```javascript
const classPermissions = {
  'get': { 'role:admin': true },
  'find': { 'role:admin': true },
  'create': {},
  'update': {},
  'delete': {},
  
  // 如果需要，添加其他权限
  'addField': {}
};
```

应用 Class Level Permissions：创建一个钩子函数（例如 beforeSave），以便在将新类保存到数据库之前设置 Class Level Permissions。

```javascript
Parse.Cloud.beforeSave('MyClass', async (request) => {
  // 当对象被创建时设置 CLP
  if (!request.original) {
    try {
      const schema = new Parse.Schema('MyClass');
      schema.setCLP(classPermissions);

      await schema.update({ useMasterKey: true });
    } catch (error) {
      console.error('Error setting CLP:', error);
    }
  }
});
```

保存对象：现在可以在客户端或服务器端保存该类的对象。CLP 将根据您所设定的规则生效。

请注意，在生产环境中使用 Class Level Permissions 时，请确保仔细规划并测试权限设置，以免导致数据安全问题。还要考虑将 CLP 结合 ACL 使用，以实现更细粒度的访问控制。

### parser server 怎么做用户数据隔离


在 Parse Server 中实现用户数据隔离，您需要使用访问控制列表（ACL）来限制数据的访问权限。ACL 可以确保只有具有正确权限的用户可以访问相应的对象。

以下是一个基本示例，说明如何在 Parse Server 中为对象设置 ACL 以实现数据隔离：

安装和初始化 Parse Server：请确保您已经正确安装并配置了 Parse Server 和 Parse JavaScript SDK。如果您还没有安装，请参考 Parse Server 安装指南 和 Parse JavaScript SDK 安装指南。

创建新对象时设置 ACL：当创建新对象时，将当前用户设置为该对象的所有者，这样只有当前用户才能访问此对象。

```javascript
// 假设您有一个名为 `Task` 的自定义类
const Task = Parse.Object.extend('Task');
const task = new Task();

// 获取当前登录用户
const currentUser = Parse.User.current();

// 创建一个针对当前用户的 ACL
const acl = new Parse.ACL(currentUser);

// 设置对象的 ACL
task.setACL(acl);

// 设置其他对象属性并保存
task.set('taskName', 'My Task');
task.save().then((savedTask) => {
  console.log('Task saved:', savedTask);
});
```

查询数据时过滤结果：当执行查询时，根据当前用户来过滤结果，以确保每个用户只能看到属于他们自己的数据。

```javascript
const Task = Parse.Object.extend('Task');
const query = new Parse.Query(Task);

// 将查询限制为仅返回当前用户的任务
query.equalTo('user', Parse.User.current());

query.find().then((tasks) => {
  console.log('Tasks found:', tasks);
});
```

通过以上步骤，您可以实现 Parse Server 中的用户数据隔离。当然，您可能需要根据实际项目需求进行相应修改。而对于更复杂的权限管理，您还可以考虑使用 Parse Server 中的 Role 类，用于处理涉及多个用户的权限分配。

### parse server 怎么限制 Object 一定要绑定用户

在 Parse Server 中，要确保对象（Object）一定要绑定用户（User），您可以使用云代码 (Cloud Code) 的 beforeSave 钩子函数来实现。在创建或更新对象之前，您可以检查是否设置了与用户关联的字段，例如 _User 字段。

以下是一个示例，演示了如何在保存 MyClass 对象之前确保它已绑定到用户：

```javascript
// main.js 或 cloud.js 文件中

Parse.Cloud.beforeSave("MyClass", async (request) => {
  const object = request.object;
  const user = request.user;

  // 检查用户是否登录
  if (!user) {
    throw new Parse.Error(Parse.Error.INVALID_SESSION_TOKEN, "用户未登录");
  }

  // 如果对象尚未绑定用户，则将其绑定到当前用户
  if (!object.get("_User")) {
    object.set("_User", user);
  }
});
```

接下来，请确保部署云代码并正确配置 Parse 服务器以使用此文件。

这样，在保存 MyClass 对象之前，系统将自动检查用户是否已登录且已绑定对象。如果没有绑定，它将抛出一个错误。如果没有登录，它会将当前登录用户附加到对象的 _User 字段。
