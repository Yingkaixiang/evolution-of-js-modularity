var dojo = {
  _scopeMap: {},
  _loadedModules: {},
  _modulePrefixes: {
    dojo: 	{	name: "dojo", value: "." },
    // dojox: 	{	name: "dojox", value: "../dojox" },
    // dijit: 	{	name: "dijit", value: "../dijit" },
    doh: 	{	name: "doh", value: "../util/doh" },
    tests: 	{	name: "tests", value: "tests" }
  },
};

dojo.global = this;

dojo._getProp = function(parts, create, context){
  var obj = context || dojo.global;
  for(var i = 0, p; obj && (p = parts[i]); i++){
    if(i == 0 && dojo._scopeMap[p]){
      p = dojo._scopeMap[p];
    }
    obj = (p in obj ? obj[p] : (create ? obj[p]={} : undefined));
  }
  return obj;
}

dojo.getObject = function(name, create, context){
  return dojo._getProp(name.split("."), create, context); // Object
}

dojo.provide = function(resourceName){
  resourceName = resourceName + "";
  return (dojo._loadedModules[resourceName] = dojo.getObject(resourceName, true)); // Object
}

dojo.require = function(moduleName, omitModuleCheck){
  var module = dojo._loadedModules[moduleName];
  if(module){
    return module;
  }

  // var relpath = dojo._getModuleSymbols(moduleName).join("/") + '.js';
  // var modArg = !omitModuleCheck ? moduleName : null;
  // var ok = dojo._loadPath(relpath, modArg);
  // if(!ok && !omitModuleCheck){
  //   throw new Error("Could not load '" + moduleName + "'; last tried '" + relpath + "'");
  // }

  // // check that the symbol was defined
  // // Don't bother if we're doing xdomain (asynchronous) loading.
  // if(!omitModuleCheck && !d._isXDomain){
  //   // pass in false so we can give better error
  //   module = d._loadedModules[moduleName];
  //   if(!module){
  //     throw new Error("symbol '" + moduleName + "' is not defined after loading '" + relpath + "'");
  //   }
  // }

  // return module;
}