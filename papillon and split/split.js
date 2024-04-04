function strtok(str1, str2,n){
    str1 = "robert ;dupont ;amiens ;80000"
    k=str1.split(str2);
    return k[n-1]
    }
    str1 = strtok
    var mot=prompt("quelle infos souhaiter vous (1 a 4)")
    console.log(strtok (str1,";", mot))//afiche amiens comme demander 