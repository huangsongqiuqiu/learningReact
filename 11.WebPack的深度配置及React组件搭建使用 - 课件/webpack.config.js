


module.exports={
	entry:'./index.js',
	output:{
		filename:'./bundle.js'
	},
	devServer:{
		contentBase:'./src',
		inline:true,
		open:true,
		port:9322
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:['style-loader','css-loader']
		},
		{
			test:/\.js$/,
			use:['react-hot-loader','babel-loader'],
			exclude:/node_modules/
		}
		]
		
	}

	


}
