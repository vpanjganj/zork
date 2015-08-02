describe('room service', function () {
    var room;
    var doorway;


    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');


        // todo: a bit of explanation here
        inject(function ($injector) {
            var roomService = $injector.get('room');
            var doorwayService = $injector.get('doorway');


            doorway = new doorwayService('North', 'Room B');
            room = new roomService('Room A', 'A test room, with a sample description');

        });

    });


    describe(', room object', function () {

        it('should exist', function () {


            expect(room).toBeDefined();

        })
        describe(', properties', function () {


            it('should have a name', function () {
                expect(room.name).toBeDefined();
                expect(room.name).not.toBeNull();
                expect(room.name).toBeTruthy();
            })
            it('should have a description', function () {
                expect(room.initialDescription).toBeDefined();
                expect(room.initialDescription).not.toBeNull();
                expect(room.initialDescription).toBeTruthy();
            })

            it('should always have a doorway property defined', function () {

                expect(room.exits).toBeDefined();

            })

            it('should always have one or more doorway out', function () {
                expect(room.exits).not.toBeNull();


            })
        })

        describe(', methods', function () {


            it('should have a addDoorway function', function () {
                expect(room.addDoorway).toBeDefined();

            })


            it('should have a getDescription function', function () {
                expect(room.getDescription).toBeDefined();

            })


            it("should mention the doorways in description", function () {

                //todo: need explanation
                room.addDoorway(doorway);

                //console.log(room.getDescription())
                expect(room.getDescription()).toEqual('A test room, with a sample description\nI can see something in the dark:\nIt seems like a door in the North');
            });

            it("should not add more than one doorway in the each direction", function () {

                //todo: need explanation
                room.addDoorway(doorway);
                expect(function () {
                    room.addDoorway(doorway)
                }).toThrow();
            });


        })
    });


});
