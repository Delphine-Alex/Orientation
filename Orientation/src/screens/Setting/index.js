const App = () => {
    const [input, setInput] = useState('');
    const [qrvalue, setQrvalue] = useState('');
    const [qrComponents, setQrComponents] = useState([]);

    function handleClick() {
        setQrComponents([...qrComponents,
        <>
            <Text>Please insert any value to generate QR code</Text>
            <TextInput
                onChangeText={(input) => setInput(input)}
                placeholder="Enter any value here"
                value={input}
            />
            <TouchableOpacity onPress={() => setQrvalue(input)}>
                <Text>Generate QR Code</Text>
            </TouchableOpacity>

            {qrvalue ? (
                <QRCode
                    key={qrComponents.length}
                    value={qrvalue}
                    size={250}
                    color="black"
                    backgroundColor="white"
                />
            ) : ('')
            }
        </>
        ])
    }

    return (
        <View>
            <TouchableOpacity onPress={handleClick}>
                <Text>Add QR Code</Text>
            </TouchableOpacity>

            {qrComponents.map((QrComponent, index) => (
                <View key={index}>{QrComponent}</View>
            ))}
        </View>
    );
};

export default App;