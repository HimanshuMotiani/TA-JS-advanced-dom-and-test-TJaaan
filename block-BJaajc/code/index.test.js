let obj = require("./index");
test('get full name',()=>{
    expect(obj.fullName("himanshu","motiani")).toBe("himanshu motiani")
})
test('get full name',()=>{
    expect(obj.fullName("rohit","yadav")).toBe("rohit yadav")
})
test('get full name',()=>{
    expect(obj.fullName("rohit","yadav")).not.toBe("himanshu motiani")
})
test(`check pallindrome`,()=>{
    expect(obj.isPalindrome("noon")).toBe(true);
})
test(`check pallindrome`,()=>{
    expect(obj.isPalindrome("gig")).toBe(true);
})
test(`check pallindrome`,()=>{
    expect(obj.isPalindrome("himanshu")).toBe(false);
})
test(`calculate circumfrence`,()=>{
    expect(obj.getCircumfrence(3)).toBe(`The circumference is NN`);
})
test(`calculate area`,()=>{
    expect(obj.getArea(3)).toBe(`The area is ${Math.PI * 9}`);
})
