describe('Configuration', function() {

  var auth;
  var authProvider;

  beforeEach(module('Satellizer'));

  beforeEach(inject(function($auth) {
    auth = $auth;
  }));

  beforeEach(function() {
    angular.module('Satellizer').config(function($authProvider) {
      authProvider = $authProvider;
    });
  });

  it('should have a config object', function() {
    expect(auth).toBeDefined();
  });

  it('should have setProvider method', function() {
    expect(authProvider.setProvider).toBeDefined();
  });

  it('should update provider with new params', function() {
    authProvider.setProvider({
      name: 'facebook',
      scope: 'profile'
    });
    var facebook = authProvider.getProvider('facebook');
    expect(facebook.scope).toBe('profile');
  });

  it('should have addProvider method', function() {
    expect(authProvider.addProvider).toBeDefined();
  });

});

