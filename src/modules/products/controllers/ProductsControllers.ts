import { Request, Response } from 'express';
import ListProductSevice from '../services/ListProductService';
import ShowProductSevice from '../services/ShowProductsService';
import CreateProductSevice from '../services/CreateProductService';
import UpdateProductSevice from '../services/UpdateProductSevice';
import DeleteProductSevice from '../services/DeleteProductSevice';

export default class ProductsController {
  public async index(request: Request, response: Response) {
    const listProducts = new ListProductSevice();

    const products = await listProducts.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showProduct = new ShowProductSevice();

    const product = await showProduct.execute({ id });

    return response.json(product);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductSevice();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const { id } = request.params;

    const updateProduct = new UpdateProductSevice();

    const product = await updateProduct.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = new DeleteProductSevice();

    await deleteProduct.execute({ id });

    return response.json([]);
  }
}
