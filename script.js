Talk.ready.then(function () {
    var other = new Talk.User({
      id: '123456',
      name: 'Alice',
      email: 'alice@example.com',
      photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
    });

    var me = new Talk.User({
        id: '654321',
        name: 'Sebastian',
        email: 'Sebastian@example.com',
        photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
        welcomeMessage: 'Hey, how can I help?',
      });

    window.talkSession = new Talk.Session({
      appId: 'tcP1sPA3',
      me: me,
    });
    
  
    var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );
    conversation.setParticipant(me);
    conversation.setParticipant(other);
  
    var inbox = talkSession.createInbox();
    inbox.select(conversation);
    inbox.mount(document.getElementById('talkjs-container'));
  });