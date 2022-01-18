import {
  Flex,
  Heading,
  HStack,
  Button,
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue,
  Box,
  Image,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, LockIcon } from "@chakra-ui/icons";
import { useMoralis, useNativeBalance } from "react-moralis";

const Navbar = () => {
  const { moralis, authenticate, isAuthenticated, user } = useMoralis();
  const {
    getBalance,
    data: balance,
    nativeToken,
    error,
    isLoading,
  } = useNativeBalance({ chain: "avalanche testnet" });

  console.log(balance, nativeToken, error, isLoading, getBalance);

  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<SunIcon />, <MoonIcon />);
  const getShortAddress = (user) => {
    if (isAuthenticated) {
      return (
        user.get("ethAddress").slice(0, 5) +
        "..." +
        user.get("ethAddress").slice(-5)
      );
    }
  };

  return (
    <Flex
      py={2}
      px={[2, 4, 4, 40]}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      className="navbar"
      bg={"black"}
    >
      <Heading size={"md"} color={"gray.100"}>
        PETFI
      </Heading>
      <HStack spacing={2}>
        <Tooltip hasArrow label="Post a new NFT collecltion">
          <Box>
            <Button
              size="sm"
              bg={"red.500"}
              fontWeight={"bold"}
              color={"gray.50"}
              onClick={() => authenticate()}
              leftIcon={<LockIcon />}
            >
              {isAuthenticated
                ? getShortAddress(user) + ` <${balance.formatted}>`
                : "Login"}
            </Button>
          </Box>
        </Tooltip>
        <IconButton
          size={"sm"}
          aria-label="Search database"
          icon={colorModeIcon}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
