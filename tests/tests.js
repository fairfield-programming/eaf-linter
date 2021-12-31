describe(`A simple test!`, () => {
    
    expect(32 + 8).toBe(40);
    expect(20 * 40).toBeGreaterThan(10 * 40);
    expect("New String").toExist().and().length().toBe(10);

});

describe(`another test over here!`, () => {

    expect((22 + 8) + "").length().toBe(2);

});