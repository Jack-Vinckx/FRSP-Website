;(function($,_,undefined){"use strict";ips.controller.register('forums.front.topic.answers',{ajaxObj:null,initialize:function(){this.on('click','a.cAnswerRate',this.rate);},rate:function(e){e.preventDefault();var self=this;var clicked=$(e.currentTarget);if(this.scope.find('.cAnswerRate_up').is('.ipsType_positive')){var currentVote='positive';}
else if(this.scope.find('.cAnswerRate_down').is('.ipsType_negative')){var currentVote='negative';}
else{var currentVote=false;}
var positive=clicked.hasClass('cAnswerRate_up');var voteCount=this.scope.find('[data-role="voteCount"]');var currentVotes=parseInt(voteCount.attr('data-voteCount'));var newVoteCount=0;var setPositive=false;var setNegative=false;if(currentVote!==false){if(positive&&currentVote=='positive'){newVoteCount=currentVotes-1;}
else if(!positive&&currentVote=='negative'){newVoteCount=currentVotes+1;}
else if(!positive&&currentVote=='positive'){newVoteCount=currentVotes-2;setNegative=true;}
else if(positive&&currentVote=='negative'){newVoteCount=currentVotes+2;setPositive=true;}}
else if(positive){newVoteCount=currentVotes+1;setPositive=true;}
else{newVoteCount=currentVotes-1;setNegative=true;}
this.setStyles(setPositive,setNegative);voteCount.toggleClass('ipsType_positive',setPositive).toggleClass('ipsType_negative',setNegative).text(newVoteCount).attr('data-voteCount',newVoteCount);if(this.ajaxObj&&_.isFunction(this.ajaxObj.abort)){this.ajaxObj.abort();}
this.ajaxObj=ips.getAjax()(clicked.attr('href')).done(function(response){Debug.log(response);voteCount.text(response.votes);self.scope.find('.ipsType_light').text(ips.pluralize(ips.getString('votes_no_number'),response.votes));});},setStyles:function(setPositive,setNegative){this.scope.find('.cAnswerRate_up').toggleClass('ipsType_positive',setPositive);this.scope.find('.cAnswerRate_down').toggleClass('ipsType_negative',setNegative);this.scope.toggleClass('cRatingColumn_up',setPositive).toggleClass('cRatingColumn_down',setNegative);this.scope.find('a.cAnswerRate_up').removeAttr('_title');this.scope.find('a.cAnswerRate_down').removeAttr('_title');if(setPositive){this.scope.find('a.cAnswerRate_up').attr('title',ips.getString('js_remove_your_vote'));}
else{this.scope.find('a.cAnswerRate_up').attr('title',ips.getString('js_vote_answer_up'));}
if(setNegative){this.scope.find('a.cAnswerRate_down').attr('title',ips.getString('js_remove_your_vote'));}


else{this.scope.find('a.cAnswerRate_down').attr('title',ips.getString('js_vote_answer_down'));}}});}(jQuery,_));;;(function($,_,undefined){"use strict";ips.controller.register('forums.front.topic.reply',{initialize:function(){this.on('click','[data-action="replyToTopic"]',this.replyToTopic);},replyToTopic:function(e){e.preventDefault();$(document).trigger('replyToTopic');}});}(jQuery,_));;;(function($,_,undefined){"use strict";ips.controller.register('forums.front.topic.view',{initialize:function(){$(document).on('replyToTopic',_.bind(this.replyToTopic,this));},replyToTopic:function(e){ips.ui.editor.getObjWithInit(this.scope.find('[data-role="replyArea"] [data-ipsEditor]'),function(editor){editor.unminimize(function(){editor.focus();});});}});}(jQuery,_));;
