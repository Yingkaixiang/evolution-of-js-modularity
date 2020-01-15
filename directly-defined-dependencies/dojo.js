var dojo = {
  _scopeMap: {},
  _loadedModules: {},
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
  return dojo._getProp(name.split("."), create, context);
}

dojo.provide = function(resourceName){
  resourceName = resourceName + "";
  const _module = dojo.getObject(resourceName, true);
  dojo._loadedModules[resourceName] = _module;
  return _module;
}

dojo.require = function(moduleName){
  var module = dojo._loadedModules[moduleName];
  if(module){
    return module;
  }
}