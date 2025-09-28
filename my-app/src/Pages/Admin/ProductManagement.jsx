import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Text,
  Badge,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Spinner,
  Center,
  HStack,
  VStack
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addProduct, editProduct, deleteProduct } from '../../Redux/productReducer.js/action';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  console.log("products", products)
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onClose: onDeleteClose } = useDisclosure();
  const [productToDelete, setProductToDelete] = useState(null);
  const cancelRef = React.useRef();
  
  const dispatch = useDispatch();
  const toast = useToast();
  const productReducer = useSelector(store => store.productReducer);

  const [formData, setFormData] = useState({
    title: '',
    price: '',
    image: '',
    category: 'plant',
    info: '',
    common: '',
    height: '',
    fcolor: '',
    bloom: '',
    level: 'Easy',
    stock: 0
  });

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (productReducer.products) {
      setProducts(Array.isArray(productReducer.products) ? productReducer.products : [productReducer.products]);
    }
  }, [productReducer.products]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      await dispatch(getProducts());
    } catch (error) {
      toast({
        title: 'Error loading products',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (editingProduct) {
        await dispatch(editProduct(formData, editingProduct._id));
        toast({
          title: 'Product updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        await dispatch(addProduct(formData));
        toast({
          title: 'Product added successfully',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
      
      onClose();
      resetForm();
      loadProducts();
    } catch (error) {
      toast({
        title: 'Error saving product',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      info: product.info,
      common: product.common,
      height: product.height,
      fcolor: product.fcolor,
      bloom: product.bloom,
      level: product.level,
      stock: product.stock || 0
    });
    onOpen();
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteProduct(productToDelete._id));
      toast({
        title: 'Product deleted successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      loadProducts();
    } catch (error) {
      toast({
        title: 'Error deleting product',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      onDeleteClose();
      setProductToDelete(null);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      price: '',
      image: '',
      category: 'plant',
      info: '',
      common: '',
      height: '',
      fcolor: '',
      bloom: '',
      level: 'Easy',
      stock: 0
    });
    setEditingProduct(null);
  };

  const openAddModal = () => {
    resetForm();
    onOpen();
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToPreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
  const goToNextPage = () => setCurrentPage(Math.min(totalPages, currentPage + 1));

  if (isLoading) {
    return (
      <Center h="50vh">
        <Spinner size="xl" color="green.500" />
      </Center>
    );
  }

  return (
    <Box>
      <Box mb={6} display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="semibold">
          Product Management ({products.length} products)
        </Text>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="green"
          onClick={openAddModal}
        >
          Add Product
        </Button>
      </Box>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentProducts.map((product, index) => (
              <Tr key={product._id}>
                <Td>
                  <Text fontWeight="medium" noOfLines={2}>
                    {startIndex + index + 1}
                  </Text>
                </Td>
                <Td>
                  <Image
                    src={product.image}
                    alt={product.title}
                    boxSize="50px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                </Td>
                <Td>
                  <Text fontWeight="medium" noOfLines={2}>
                    {product.title}
                  </Text>
                </Td>
                <Td>
                  <Badge colorScheme="green" textTransform="capitalize">
                    {product.category}
                  </Badge>
                </Td>
                <Td>₹{product.price}</Td>
                <Td>{product.stock || 0}</Td>
                <Td>
                  <IconButton
                    icon={<EditIcon />}
                    size="sm"
                    colorScheme="blue"
                    mr={2}
                    onClick={() => handleEdit(product)}
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    size="sm"
                    colorScheme="red"
                    onClick={() => {
                      setProductToDelete(product);
                      onDeleteOpen();
                    }}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box mt={6} display="flex" justifyContent="center" alignItems="center">
          <HStack spacing={2}>
            <Button
              size="sm"
              onClick={goToFirstPage}
              isDisabled={currentPage === 1}
              variant="outline"
            >
              First
            </Button>
            <Button
              size="sm"
              onClick={goToPreviousPage}
              isDisabled={currentPage === 1}
              variant="outline"
            >
              Previous
            </Button>
            
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                size="sm"
                onClick={() => handlePageChange(page)}
                colorScheme={currentPage === page ? "green" : "gray"}
                variant={currentPage === page ? "solid" : "outline"}
              >
                {page}
              </Button>
            ))}
            
            <Button
              size="sm"
              onClick={goToNextPage}
              isDisabled={currentPage === totalPages}
              variant="outline"
            >
              Next
            </Button>
            <Button
              size="sm"
              onClick={goToLastPage}
              isDisabled={currentPage === totalPages}
              variant="outline"
            >
              Last
            </Button>
          </HStack>
          
          <Text ml={4} fontSize="sm" color="gray.600">
            Showing {startIndex + 1} to {Math.min(endIndex, products.length)} of {products.length} products
          </Text>
        </Box>
      )}

      {/* Add/Edit Product Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
                <FormControl isRequired>
                  <FormLabel>Product Title</FormLabel>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter product title"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Price</FormLabel>
                  <NumberInput
                    value={formData.price}
                    onChange={(value) => setFormData({ ...formData, price: value })}
                  >
                    <NumberInputField placeholder="Enter price" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Enter image URL"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Category</FormLabel>
                  <Select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="plant">Plant</option>
                    <option value="seed">Seed</option>
                    <option value="bulb">Bulb</option>
                    <option value="herb">Herb</option>
                    <option value="tool">Tool</option>
                    <option value="accessory">Accessory</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Common Names</FormLabel>
                  <Input
                    value={formData.common}
                    onChange={(e) => setFormData({ ...formData, common: e.target.value })}
                    placeholder="Enter common names"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Height</FormLabel>
                  <Input
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="Enter plant height"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Flower Color</FormLabel>
                  <Input
                    value={formData.fcolor}
                    onChange={(e) => setFormData({ ...formData, fcolor: e.target.value })}
                    placeholder="Enter flower color"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Bloom Time</FormLabel>
                  <Input
                    value={formData.bloom}
                    onChange={(e) => setFormData({ ...formData, bloom: e.target.value })}
                    placeholder="Enter bloom time"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Care Level</FormLabel>
                  <Select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Easy to grow">Easy to grow</option>
                    <option value="Moderately difficult">Moderately difficult</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Stock Quantity</FormLabel>
                  <NumberInput
                    value={formData.stock}
                    onChange={(value) => setFormData({ ...formData, stock: value })}
                    min={0}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
              </Box>

              <FormControl isRequired mt={4}>
                <FormLabel>Product Information</FormLabel>
                <Textarea
                  value={formData.info}
                  onChange={(e) => setFormData({ ...formData, info: e.target.value })}
                  placeholder="Enter detailed product information"
                  rows={4}
                />
              </FormControl>

              <Box mt={6} display="flex" justifyContent="flex-end" gap={3}>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  type="submit"
                  colorScheme="green"
                  isLoading={isSubmitting}
                  loadingText="Saving..."
                >
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Product
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete "{productToDelete?.title}"? This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ProductManagement;
