// COMMONLY USED SETS
// create

// read
const readRoom = ['readRoomId', 'readRoomName', 'readRoomDescription']
const readBooking = ['readBookingId', 'readBookingUser']
const readOwnBooking = ['readBookingId:own', 'readBookingUser:own']
const readUser = ['readUserId', 'readUserUsername', 'readUserRole']
const readOwnUser = ['readUserId:own', 'readUserUsername:own', 'readUserRole:own']

// update
const updateRoom = ['updateRoomName', 'updateRoomDescription']
const updateBooking = ['updateBookingUser']
const updateOwnUser = ['updateUserUsername:own', 'updateUserPassword:own']
const updateUser = ['updateUserUsername', 'updateUserPassword', 'updateUserRole'] // for admins

// delete

// ROLES
const visitor = ['createSession', 'createUserUser', ...readRoom]
const user = ['createBooking', ...readRoom, ...readOwnBooking, ...readOwnUser, ...updateOwnUser, 'deleteUser:own', 'deleteSession']
const admin = ['createRoom', 'createBooking', 'createUserUser', 'createUserAdmin', ...readRoom, ...readBooking, ...readUser, ...updateRoom, ...updateBooking, ...updateUser, 'deleteRoom', 'deleteBooking', 'deleteUser', 'deleteSession']

export default {visitor, user, admin}
