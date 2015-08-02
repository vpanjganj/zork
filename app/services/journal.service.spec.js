describe('journal service', function () {
    var journal;


    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');

        inject(function ($injector) {
             journal = $injector.get('journal');


        });

    });


    describe(', journal service', function () {

        it('should exist', function () {


            expect(journal).toBeDefined();

        })
        describe(', properties', function () {


            it('should have content', function () {
                expect(journal.content).toBeDefined();
            })


        })

        describe(', methods', function () {


            it('should contain an addToJournal function', function () {
                expect(journal.addToJournal).toBeDefined();
            })


        })
    });


});
