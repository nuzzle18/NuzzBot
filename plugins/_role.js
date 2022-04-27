let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE.data.users[m.sender]
        let role = (user.level <= 10) ? 'Bronze'
          : ((user.level >= 10) && (user.level <= 30)) ? 'Silver'
          : ((user.level >= 30) && (user.level <= 45)) ? 'Gold'
          : ((user.level >= 45) && (user.level <= 65)) ? 'Platinum'
          : ((user.level >= 65) && (user.level <= 80)) ? 'Diamond'
          : ((user.level >= 80) && (user.level <= 100)) ? 'Master'
          : ((user.level >= 100) && (user.level <= 120)) ? 'Master I'
          : ((user.level >= 120) && (user.level <= 150)) ? 'Master II'
          : 'Grand Master'
  user.role = role
  return true
}

module.exports = handler
