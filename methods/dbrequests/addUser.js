/**
* @async
* Add user to database from telegram listener
* @function
* @param {object} msg - data from tbot listener. 
* @return {Promise<boolean>} Promise returns {msg<string>}
*/

module.exports = async msg => {

  // TODO add more than one user from 'new_chat_members'

  let firstName,lastName,fullName,id,userName,eventType;
  eventType = ('new_chat_member' in msg) ? 'new_chat_member' : 'from';
  firstName = msg[eventType].first_name || '';
  lastName = msg[eventType].last_name || '';
  fullName = `${firstName} ${lastName}`;
  id = msg[eventType].id || '';
  userName = msg[eventType].username ? `@${msg[eventType].username}` : 'NoUserName';

  let data = await global.collect.update(
    {id:id},
    {id:id,username:userName,fullname:fullName},
    {upsert:true}
  );

  return data.result.ok;


  console.log(`new message : ${fullName} ${id} ${userName} : ${msg.text}`);
};
