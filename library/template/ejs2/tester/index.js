var template = '<% if (user) { %>< h2 ><%= user.name %></h2><% } %>';
var compiledTemplate = ejs.compile(template, {});
console.log(compiledTemplate({ user: { name: 'Hellow World!' } }));
console.log(ejs.render(template, { user: { name: 'Hellow World!' } }, {}));
