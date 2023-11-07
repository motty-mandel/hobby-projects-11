const { Schema, model } = require('mongoose');

// const reactionSchema = new Schema(
//     {
//         reactionID: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId,
//         },
//         raectionBody: {
//             type: String,
//             required: true,
//             maxLength: 280,
//         },
//         username: {
//             type: String,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//             get: function (timestamp) {
//                 return new Date(timestamp).toLocaleString();
//             },
//         },
//     }
// );

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            },
        },

        username: {
            type: String,
            required: true,
            ref: 'User',
        },
        // Do I have to seed this reaction schema in the seed file
        reactions: [], //reactionSchema
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


thoughtSchema.virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;