describe(`A simple test!`, () => {
    
    expect(32 + 8).toBe(40); // passing

    expect(20 * 40).toBeGreaterThan(40 * 40); // failed
    
    expect("New String").toExist().and().length().toBe(10); // passing

});