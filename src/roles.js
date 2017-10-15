// COMMONLY USED SETS
// create

// read
const readRoom = ['readRoomId', 'readRoomName', 'readRoomDescription']
const readBooking = ['readBookingId']
const readOwnBooking = ['readBookingId:own']
const readUser = ['readUserId', 'readUserUsername', 'readUserRole']
const readOwnUser = ['readUserId:own', 'readUserUsername:own', 'readUserRole:own']

// update
const updateRoom = ['updateRoomName', 'updateRoomDescription']
const updateBooking = []
const updateOwnUser = ['updateUserUsername:own', 'updateUserPassword:own']
const updateUser = ['updateUserUsername', 'updateUserPassword', 'updateUserRole'] // for admins

// delete

// ROLES
const visitor = ['createSession', 'createUser', ...readRoom]
const user = ['createBooking', ...readRoom, ...readOwnBooking, ...readOwnUser, ...updateOwnUser, 'deleteUser:own', 'deleteSession']
const admin = ['createRoom', 'createBooking', 'createUser', ...readRoom, ...readBooking, ...readUser, ...updateRoom, ...updateBooking, ...updateUser, 'deleteRoom', 'deleteBooking', 'deleteUser', 'deleteSession']

export default {visitor, user, admin}
