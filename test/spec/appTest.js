describe('app',function(){

  describe('Box', function() {
    var renderedBox;

    beforeEach(function(){
      $('#testLand').html('');
      React.render(
        React.createElement(Box),
        document.getElementById('testLand')
      );
      renderedBox = $('#testLand .box');
    });

    it ('should render a box',function(){
      expect(renderedBox.length).to.equal(1);
      expect(renderedBox.html()).to.contain('-');
    });

    it ('should change it\'s content on click',function(){
      renderedBox.trigger('click');
      expect(renderedBox.html()).not.to.contain('-');
      expect(renderedBox.html()).to.contain('X');
      renderedBox.trigger('click');
      expect(renderedBox.html()).not.to.contain('X');
      expect(renderedBox.html()).to.contain('O');
    });

  });

  describe('Row', function() {
    var renderedRow;

    beforeEach(function(){
      $('#testLand').html('');
      React.render(
        React.createElement(Row),
        document.getElementById('testLand')
      );
      renderedRow = $('#testLand .row');
    });

    it ('should render a row containing three boxes', function(){
      expect(renderedRow.length).to.equal(1);
      expect(renderedRow.find('.box').length).to.equal(3);
    });
  });

});
