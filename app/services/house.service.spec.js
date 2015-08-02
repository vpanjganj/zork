describe('house service', function () {
    var house;
    var room;

    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');

        inject(function ($injector) {
            house = $injector.get('house');

            var roomService = $injector.get('room');


            room = new roomService('Room A', 'A test room, with a sample description');
        });

    });


    describe(', house service', function () {

        it('should exist', function () {


            expect(house).toBeDefined();

        });
        describe(', properties', function () {


            it('should have rooms', function () {
                expect(house.rooms).toBeDefined();
            })


        });

        describe(', methods', function () {


            it('should contain an addRoom function', function () {
                expect(house.addRoom).toBeDefined();
            });
            it('should contain an getRoomByName function', function () {
                expect(house.getRoomByName).toBeDefined();
            });

            it('should contain an init function', function () {
                expect(house.getRoomByName).toBeDefined();
            });



            it('should throw error when adding a room with duplicated name', function () {
                house.addRoom(room);
                expect(function(){ house.addRoom(room)}).toThrow();
            });


            it('should throw error when give room name does not exist', function () {
                house.addRoom(room);
                expect(function(){ house.getRoomByName('Room B')}).toThrow();
            });

            it('should return a room with given name', function () {
                house.addRoom(room);
                expect( house.getRoomByName('Room A')).toBe(room);
            });
        })
    });


});
