/*Created by Caiconghao on 2018/5/30*/

class El {

	constructor(){

	}

	el (elType) {
		if(typeof elType === 'string'){
			if(elType[0] === '.' && elType.split('.').length >= 2){
				if(document.getElementsByClassName(elType.split('.')[1]).length === 1){
					return document.getElementsByClassName(elType.split('.')[1])[0];
				}
				let arr = [];
				for(let i=0;i< document.getElementsByClassName(elType.split('.')[1]).length;i++){
					arr[i] = document.getElementsByClassName(elType.split('.')[1])[i];
				}
				return arr;
			}else if(elType.indexOf('#') != -1 && elType[0] === '#'){
				return document.getElementById(elType.split('#')[1]);
			}else{
                throw new Error('error! check out please')
            }
		}
	}

	eachInnerHTML (...rest) {			// eachInnerHTML (domArr, val)
		if(rest.length != 2){
			throw new Error('arguments error, you may try like this  => eachInnerHTML (domArr, val)')
		}
    	for(let i = 0; i < rest[0].length; i++){
			rest[0][i].innerHTML = rest[1];
		}
    }

    eachAttr (...rest) {    		// eachDomAttr (domArr, attr, val)
    	if(rest.length != 3){
    		throw new Error('arguments error, you may try like this  => eachDomAttr (domArr, attr, val)')
    	}         
    	for(let i = 0; i < rest[0].length; i++){
			rest[0][i].setAttribute(rest[1], rest[2]);
		}
    }

    attr (...rest) {                 // attr (dom, attr, val)
    	if(rest.length === 2){
    		return rest[0].getAttribute(rest[1]);
    	}else if(rest.length === 3){
    		rest[0].setAttribute(rest[1], rest[2]);
    	}else{
    		throw new Error('arguments error, you may try like this  => attr (dom, attr, val)')
    	}
    }

    class (...rest) {                // class (dom, val)
    	if(rest.length === 1){
    		return rest[0].className;
    	}else if(rest.length === 2){
    		rest[0].className = rest[1];
    	}else{
    		throw new Error('arguments error, you may try like this  => class (dom, val)')
    	}
    }

    addStyle (...rest) {					//  addStyle(dom(s), style, val)
    	if(rest.length === 3){
    		if(!rest[0].length){
	    				let newVal = rest[0].getAttribute('style') + ';'+ rest[1]+ ':' + rest[2];
	    				rest[0].setAttribute('style', newVal);
    		}else{
    			for(let i=0;i<rest[0].length;i++){
	    			((i)=>{
	    				let newVal = rest[0][i].getAttribute('style') + ';'+ rest[1]+ ':' + rest[2];
	    				rest[0][i].setAttribute('style', newVal);
	    			})(i) 
	    		}
    		}
    	}else if(rest.length === 2 && !rest[0].length && typeof rest[1] === 'object'){
            let keys = Object.keys(rest[1]);
            for(let i=0;i<keys.length;i++){
                ((i)=>{
                    let newVal = rest[0].getAttribute('style') + ';' + keys[i] + ':' + rest[1][keys[i]];
                    rest[0].setAttribute('style', newVal);
                })(i)
            }
        }else if(rest.length === 2 && rest[0].length && typeof rest[1] === 'object'){
            for(let i=0;i<rest[0].length;i++){
                let keys = Object.keys(rest[1]);
                ((i)=>{
                    for(let j=0;j<keys.length;j++){
                        ((j)=>{
                            let newVal = rest[0][i].getAttribute('style') + ';' + keys[j] + ':' + rest[1][keys[j]];
                            rest[0][i].setAttribute('style', newVal);
                        })(j)
                    }
                })(i)
            }
        }else{
            throw new Error('arguments error, you may try like this  => addStyle(dom(s), style, val) / addStyle(dom(s), {styleObject})')
        }
    }
}

let cat = new El();
