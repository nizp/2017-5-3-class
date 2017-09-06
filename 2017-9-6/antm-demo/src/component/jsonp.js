export default function(json){
    
    let settings = {
        url:'',
        data:{},
        success:function(){},
        cb:'callback'
    }
    
    let fnName = 'jQuery'+Math.random()+(+new Date);
    
    fnName = fnName.replace('0.','_');
    // console.log(fnName)
    
    /*
        
        先在settings下定义一个success 把业务逻辑提出去
        
        在window[fnName]拿到数据的时候，调用settings.success
        
        并且把数据传给外面使用框架中的success函数中。
        
        
    */
    window[fnName] = function (data){
        
        //console.log(settings.success);//外面使用框架的success函数

        settings.success(data);
    }

    //浅拷贝
    Object.assign(settings,json);

    fnName = settings.fnName || fnName;

    console.log(fnName)
    
    //把cb放到对象下面，一次性循环就能直接得到结果。
    settings.data[settings.cb] = fnName;
    
    console.log(settings.data)
    
    //表单序列化
    let arr = [];
    for(let attr in settings.data){
        
        arr.push(attr + '=' + settings.data[attr]);
        
    }
    let str = arr.join('&');
    
    let oS = document.createElement('script');
    
    //wd=sdfgs&cb=jQuery_934968
    
    oS.src = settings.url + '?' + str;
    
    document.getElementsByTagName('head')[0].appendChild(oS);
    //删
    oS.remove();
}