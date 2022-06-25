const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
})

module.exports = {
  css: {
    loaderOptions: {

      postcss: {

        postcssOptions:{
          plugins: [
            require("postcss-pxtorem")({ 
              rootValue: 37.5 ,
              propList: ['*']
              }),
          ],
        }
        
      },
    },
  },
};
