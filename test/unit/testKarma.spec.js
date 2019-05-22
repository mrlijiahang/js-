describe("testKarma单元测试", function() {

  it("如果函数测试", function() {
      expect(ifTest(true)).toBe('热热');
      expect(ifTest(false)).toBe("凉凉");
  });

  it("回文函数测试", function() {
      expect(reverseStr('abc')).toEqual('cba');
  })
  it("加法测试",function(){
    var add7 = add(7);
    expect(add7(3)).toEqual(10);
  })
  it("乘法测试",function(){
    var multi2 = multi(2);
    expect(multi2(3)).toEqual(6);
  })

});