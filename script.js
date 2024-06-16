let f,a,b,ev,fail,k

function display(){
    f=document.getElementById('function').value.toString()
    a=document.getElementById('guess').value.toString()
    fail=false
    k=0
    document.getElementById("container").innerHTML="x ≈ "+iterate(a,0)
    if(fail){
        document.getElementById("container").innerHTML="Newton's method is unable to solve this equation; likely because the derivative equals zero at some point. Try adjusting the initial guess."
    }
}

function iterate(a,num){
    b=a-math.evaluate(f,{x:a})/math.derivative(f,'x').evaluate({x:a})
    if(b==a){
        if(!doubleCheck(b)){
            fail=true
            return NaN
        }else{
            return b
        }
    }else{
        k++
        if(num>100){
            fail=true
            return NaN
        }
        return iterate(b,k)
    }
}

function doubleCheck(b){
    if(Math.abs(math.evaluate(f,{x:b}))>0.01){
        return false
    }else{
        return true
    }
}