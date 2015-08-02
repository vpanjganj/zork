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

            room = new roomService()
            doorway = new doorwayService();
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
                expect(room.description).toBeDefined();
                expect(room.description).not.toBeNull();
                expect(room.description).toBeTruthy();
            })

            it('should always have a doorway property defined', function () {
                expect(room.exits).toBeDefined();
                expect(room.exits).not.toBeNull();

            })

            it('should always have one or more doorway out', function () {
                expect(room.exits.length).toBeGreaterThan(0);

            })
        })

        describe(', methods', function () {


            it('should have a addDoorway function', function () {
                expect(room.addDoorway).toBeDefined();

            })

            it('should have a getDescription function', function () {
                expect(room.getDescription).toBeDefined();

            })

            it("should not add more than one doorway in the each direction", function () {

                //todo: need explanation
                room.addDoorway(doorway);
                expect(room.addDoorway(doorway)).toThrow();
            });

            it("should mention the doorways in description", function () {

                //todo: need explanation
                room.addDoorway(doorway);
                expect(room.getDescription()).toEqual('');
            });

        })
    });


});
