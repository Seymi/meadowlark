suite('Global Tests', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) &&
        document.title.toUpperCase() !== 'TODO');
    });
    test('page title equal "Meadowlark Travel"', function(){
        assert(document.title && document.title.match(/\S/) &&
        document.title === 'Meadowlark Travel');
    });
    
});
