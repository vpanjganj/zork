describe('player service', function () {
    var player;
    var room;

    // Setup the mock service in an anonymous module.
    beforeEach(function () {

        module('app');

        inject(function ($injector) {
            var playerService = $injector.get('player');
            var roomService = $injector.get('room');

            room = new roomService('Room A','Sample description');
            player = new playerService('Tom',roomService);
        });

    });


    describe(', player object', function () {

        it('should exist', function () {


            expect(player).toBeDefined();

        });
        describe(', properties', function () {


            it('should contain a name', function () {
                expect(player.name).toBeDefined();
            });

            it('should always have a current location', function () {
                expect(player.currentLocation).toBeDefined();
                expect(player.currentLocation).not.toBeNull();
                expect(player.currentLocation).toBeTruthy();

            })
        });

        describe(', methods', function () {


            it('should contain a move function', function () {
                expect(player.move).toBeDefined();
            });

            it('should contain a takeCommand function', function () {
                expect(player.takeCommand).toBeDefined();
            });

           /* it('should throw error when command is not found', function () {
                expect(function(){ player.takeCommand('jump hi')}).toThrow();
            })*/
        })
    });


});
