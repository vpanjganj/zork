describe('door service', function () {
    var door;
    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');

        inject(function ($injector) {
            var doorService = $injector.get('door');


            door = new doorService('North','Room A');
        });

    });


    // a door is like an exit to the next room.
    // a room can have many doors in different directions linking to different rooms
    describe(', door object', function () {

        it('should exist', function () {


            expect(door).toBeDefined();

        });
        describe(', properties', function () {



            // a door should have a direction
            it('should contain a direction', function () {
                expect(door.direction).toBeDefined();
                expect(door.direction).not.toBeNull();
                expect(door.direction).toBeTruthy();
            });

            // a door should point to a room. It can be the name of the room
            it('should point to a room', function () {
                expect(door.leadsTo).toBeDefined();
                expect(door.leadsTo).not.toBeNull();
                expect(door.leadsTo).toBeTruthy();
            })

        })


    });


});

