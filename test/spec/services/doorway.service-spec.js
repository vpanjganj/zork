describe('doorway service', function () {
    var doorway;
    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');

        inject(function ($injector) {
            var doorwayService = $injector.get('doorway');


            doorway = new doorwayService('North','Room A');
        });

    });


    // a doorway is like an exit to the next room.
    // a room can have many doorways in different directions linking to different rooms
    describe(', doorway object', function () {

        it('should exist', function () {


            expect(doorway).toBeDefined();

        });
        describe(', properties', function () {



            // a doorway should have a direction
            it('should contain a direction', function () {
                expect(doorway.direction).toBeDefined();
                expect(doorway.direction).not.toBeNull();
                expect(doorway.direction).toBeTruthy();
            });

            // a doorway should point to a room. It can be the name of the room
            it('should point to a room', function () {
                expect(doorway.leadsTo).toBeDefined();
                expect(doorway.leadsTo).not.toBeNull();
                expect(doorway.leadsTo).toBeTruthy();
            })

        })


    });


});

