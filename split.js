function strtok(str1, str2,n){
    str1 = "robert ;dupont ;amiens ;80000"
    k=str1.split(str2);
    return k[n-1]
    }
    str1 = strtok
    console.log(strtok (str1,";", 3))//afiche amiens comme demander 