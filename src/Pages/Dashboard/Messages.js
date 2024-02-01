import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from 'Config/firebase';
import { message, Modal } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);

    async function fetchMessages() {
        const messagesCollection = collection(firestore, 'messages');
        const querySnapshot = await getDocs(messagesCollection);
        const messageList = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            messageList.push({
                id: doc.id,
                Name: data.Name,
                email: data.email,
                subject: data.subject,
                Message: data.Message,
                timestamp: data.timestamp.toDate(),
            });
        });

        return messageList;
    }

    useEffect(() => {
        const fetchMessagesData = async () => {
            const messagesData = await fetchMessages();
            setMessages(messagesData);
        };

        fetchMessagesData();
    }, []);

    const handleDelete = async () => {
        if (!selectedMessage) return;

        try {
            const messageDocRef = doc(firestore, 'messages', selectedMessage.id);
            await deleteDoc(messageDocRef);

            message.success('Message deleted successfully');
            setMessages(messages.filter((message) => message.id !== selectedMessage.id));
            setSelectedMessage(null);
            setDeleteModalVisible(false);
        } catch (error) {
            console.error('Error deleting message:', error);
            message.error('Message could not be deleted');
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Messages</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/5 text-left py-2 px-4">Name</th>
                            <th className="w-1/5 text-left py-2 px-4">Email</th>
                            <th className="w-1/5 text-left py-2 px-4">Subject</th>
                            <th className="w-1/5 text-left py-2 px-4">Message</th>
                            <th className="w-1/5 text-left py-2 px-4">Timestamp</th>
                            <th className="w-1/5 text-left py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {messages.map((message) => (
                            <tr key={message.id} className="hover:bg-gray-100">
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{message.Name}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{message.email}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{message.subject}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">{message.Message}</td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">
                                    {message.timestamp.toLocaleString()}
                                </td>
                                <td className="border-t-2 border-gray-600 text-left py-2 px-4">
                                    <button
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => {
                                            setSelectedMessage(message);
                                            setDeleteModalVisible(true);
                                        }}
                                    >
                                        <RiDeleteBin6Line size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
                title="Delete Message"
                visible={deleteModalVisible}
                onOk={handleDelete}
                onCancel={() => setDeleteModalVisible(false)}
            >
                <p>Are you sure you want to delete this message?</p>
            </Modal>
        </div>
    );
};

export default Messages;
