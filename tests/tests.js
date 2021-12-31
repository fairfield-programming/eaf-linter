describe(`A simple test!`, () => {
    
    expect(32 + 8).toBe(40); // passing

    expect(20 * 40).toBeGreaterThan(10 * 40); // passing
    
    expect("New String").toExist().and().length().toBe(10); // passing

});