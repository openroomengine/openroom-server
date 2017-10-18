// COMMONLY USED SETS
// create

// read
const readRoom = ['readRoomId', 'readRoomName', 'readRoomDescription', 'readRoomCreatedAt']
const readBooking = ['readBookingId', 'readBookingUser', 'readBookingCreatedAt']
const readOwnBooking = ['readBookingId:own', 'readBookingUser:own', 'readBookingCreatedAt:own']
const readUser = ['readUserId', 'readUserUsername', 'readUserRole', 'readUserCreatedAt']
const readOwnUser = ['readUserId:own', 'readUserUsername:own', 'readUserRole:own', 'readUserCreatedAt:own']

// update
const updateRoom = ['updateRoomName', 'updateRoomDescription']
const updateBooking = ['updateBookingUser']
const updateOwnUser = ['updateUserUsername:own', 'updateUserPassword:own']
const updateUser = ['updateUserUsername', 'updateUserPassword', 'updateUserRole'] // for admins

// delete

// ROLES
const visitor = ['createSession', 'createUserUser', ...readRoom]
const user = ['createBooking:own', ...readRoom, ...readOwnBooking, ...readOwnUser, ...updateOwnUser, 'deleteUser:own', 'deleteSession']
const admin = ['createRoom', 'createBooking', 'createUserUser', 'createUserAdmin', ...readRoom, ...readBooking, ...readUser, ...updateRoom, ...updateBooking, ...updateUser, 'deleteRoom', 'deleteBooking', 'deleteUser', 'deleteSession']

export default {visitor, user, admin}
