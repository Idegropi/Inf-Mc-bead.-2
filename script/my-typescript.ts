function paralelogrammaTerulet(a: number, b: number, c: number): number{
    console.log("paralelogrammaTerulet")
    return a * b * Math.sin(c/180*Math.PI)
}

function paralelogrammaTerulet1(a: number, ma: number): number{
    console.log("paralelogrammaTerulet1")
    return a * ma
}

function randomStringsToString(input: string): string{
    var res = randomStrings(input.split(";"))

    return res[0] + "\n" + res[1] + "\n" + res[2]
}

function randomStrings(array: string[]): string[]{
    var res: string[] = []
    for (let index = 0; index < 3; index++) {
        res.push(array[randomIndex(array.length)])
    }

    return res
}

function randomIndex(len: number): number{
   return  Math.floor(Math.random() * (len))
}